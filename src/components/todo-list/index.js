'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from 'reducers/todos/actions-creator'
import * as filterActions from 'reducers/visibility-filter/actions'

const TodoList = ({todos, handleToggleTodo, activeFilter}) => (
  <ul>
    {getVisibleTodos(todos, activeFilter).map((todo) => (
      <li key={todo.id}
        onClick={handleToggleTodo(todo.id)}
        style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
        {todo.text}
      </li>
))}
  </ul>
)

const getVisibleTodos = (todos, activeFilter) => {
  return {
    [filterActions.SHOW_ALL]: todos,
    [filterActions.SHOW_COMPLETED]: todos.filter((todo) => todo.completed),
    [filterActions.SHOW_ACTIVE]: todos.filter((todo) => !todo.completed)
  }[activeFilter]
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  activeFilter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
  handleToggleTodo: (id) => (e) => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
