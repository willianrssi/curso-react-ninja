'use strict'

import React, { PropTypes } from 'react'

const Repos = ({className, title, repos}) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.html_url}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

Repos.defaultProps = {
  className: ''
}

export default Repos
