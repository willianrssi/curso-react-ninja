'use strict'

import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyCQ_mdegcgvgKQ1J6Du9SU1SblLbP9tSts',
  authDomain: 'reactflix-9d3c7.firebaseapp.com',
  databaseURL: 'https://reactflix-9d3c7.firebaseio.com',
  projectId: 'reactflix-9d3c7',
  storageBucket: 'reactflix-9d3c7.appspot.com',
  messagingSenderId: '866368453040'
})

const db = firebase.database()

export { db }
