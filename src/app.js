'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

const initialRepoState = {
  repos: [],
  pagination: {
    total: 1,
    activePage: 1
  }
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: initialRepoState,
      starred: initialRepoState,
      isFetching: false
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.perPage = 3
  }

  getGitHubApiUrl (username, type, page = 1) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}?per_page=${this.perPage}&page=${page}`
  }

  handleSearch (e) {
    const value = e.target.value
    const ENTER = 13
    const keyCode = e.which || e.keyCode

    if (ENTER === keyCode) {
      this.setState({
        isFetching: true,
        userinfo: null
      })

      ajax().get(this.getGitHubApiUrl(value)).then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            login: result.login,
            photo: result.avatar_url,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following,
            url: result.url
          },
          repos: initialRepoState,
          starred: initialRepoState
        })
      }).always(() => this.setState({ isFetching: false })

        )
    }
  }

  getRepos (type, page) {
    return (e) => {
      const username = this.state.userinfo.login
      ajax().get(this.getGitHubApiUrl(username, type, page)).then((result, xhr) => {
        const linkHeader = xhr.getResponseHeader('Link') || ''
        const totalPagesMatch = linkHeader.match(/&page=(\d+)>; rel="last/)
        console.log(totalPagesMatch)
        this.setState({
          [type]: {
            repos: result.map((repo) => ({
              name: repo.name,
              html_url: repo.html_url
            })),
            pagination: {
              total: totalPagesMatch ? +totalPagesMatch[1] : this.state[type].pagination.total,
              activePage: page

            }
          }
        })
      }
      )
    }
  }

  render () {
    return (
      <div className='container' >
        <AppContent
          {...this.state}
          handleSearch={this.handleSearch}
          getRepos={this.getRepos('repos')}
          getStarred={this.getRepos('starred')}
          handlePagination={(type, page) => this.getRepos(type, page)()} />
      </div>
    )
  }
}
export default App
