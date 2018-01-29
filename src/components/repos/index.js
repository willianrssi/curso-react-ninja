'use strict'

import React, { PropTypes } from 'react'
import './repos.css'
import Pagination from 'components/pagination'

const Repos = ({ className, title, repos, handlePagination }) => (
  <div className={`repos-list-container ${className}`}>
    <h2>{title}</h2>
    <ul className='repos-list'>
      {repos.repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.html_url}>{repo.name}</a>
        </li>
      ))}
    </ul>
    <Pagination total={repos.pagination.total} activePage={repos.pagination.activePage} onClick={handlePagination} />
  </div>
)

const reposPropTypeShape = {
  repos: PropTypes.array.isRequired,
  pagination: PropTypes.object
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.shape(reposPropTypeShape),
  handlePagination: PropTypes.func.isRequired
}

Repos.defaultProps = {
  className: ''
}

export default Repos
