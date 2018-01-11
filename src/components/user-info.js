'use strict'

import React, { PropTypes } from 'react'

const UserInfo = ({userinfo}) => (
  <div className='user-info'>
    <img src={userinfo.photo} />

    <h1>
      <a className='username' href={`http://github.com/${userinfo.login}`}>
        {userinfo.username}
      </a>
    </h1>

    <ul>
      <li>Repositórios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo:{userinfo.following}</li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired
  })

}
export default UserInfo
