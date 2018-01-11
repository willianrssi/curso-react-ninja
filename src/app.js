'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
    this.handleSearch = this.handleSearch.bind(this)
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
      ajax().get(`https://api.github.com/users/${value}`).then((result) => {
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
          repos: [],
          starred: []
        })
      }).always(() => this.setState({isFetching: false})

      )
    }
  }

  getRepos (type) {
    return (e) => {
      const user = this.state.userinfo.login
      ajax().get(`https://api.github.com/users/${user}/${type}`).then((result) =>
        this.setState({
          [type]: result.map((repo) => ({
            name: repo.name,
            html_url: repo.html_url
          }

          )
          )
        })
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
          getStarred={this.getRepos('starred')} />
      </div>
    )
  }
}
export default App
