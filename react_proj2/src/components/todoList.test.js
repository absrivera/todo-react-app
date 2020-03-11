// import React, { useState, useEffect } from 'react'
// import { Card, Col, Table, Button } from 'react-bootstrap'
import axios from 'axios'
//import { Link } from 'react-router-dom'
import TodoList from './todoList'

// const getTodos = require('./todoList')
// const deleteTodo = require('./todoList')
// const addTodo = require('./addTodo')

jest.mock('axios')
TodoList.getTodos = jest.fn()

describe('todo functionality ', () => {

    test('it should fetch todos', () => {
        const todos = [{ description: 'study', deadline: 'midnight' }]
        const response = { data: todos }
        axios.get.mockResolvedValue(response)
        return TodoList.getTodos().then(data => expect(data).toEqual(todos))
    })

    // test('post invalid todo request', ()=>{
    //     const todo = {}
    //     const resposnse = {resp: 'SequelizeDatabaseError'}


    // })
})