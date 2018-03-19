'use strict'

import React from 'react'
import Form from 'components/form'
import TodoList from 'components/todo-list'
import Filter from 'components/filter'
import SearchCepContainer from 'components/search-cep'
import 'milligram'

const App = () => (
  <div style={{display: 'flex', justifyContent: 'space-around', padding: 30}}>
    <div>
      <Form />
      <TodoList />
      <Filter />
    </div>
    <div>
      <SearchCepContainer />
    </div>
  </div>
  )

export default App
