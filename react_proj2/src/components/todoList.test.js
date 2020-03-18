import axios from 'axios'
import TodoList from './todoList'

jest.mock('axios')
TodoList.getTodos = jest.fn()
TodoList.addTodo = jest.fn()

describe('todo functionality ', () => {

    test('it should fetch todos', () => {
        const todos = [{ description: 'study', deadline: 'midnight' }]
        const response = { data: todos }
        axios.get.mockResolvedValue(response)
        return TodoList.getTodos().then(data => expect(data).toEqual(todos))
    })
})