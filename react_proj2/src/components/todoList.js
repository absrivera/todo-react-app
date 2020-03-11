import React, { useState, useEffect } from 'react'
import { Card, Col, Table, Button } from 'react-bootstrap'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function TodoList() {

    let [todos, update] = useState([]);

    useEffect(() => {
        // Axios.get('/todos')
        //     .then((dbRes) => {
        //         update(dbRes.data)
        //     }).catch(err => {
        //         console.log(err)
        //     })

        getTodos()
    }, [])

    function getTodos(){
        Axios.get('/todos')
        .then((dbRes) => {
            update(dbRes.data)
        }).catch(err => {
            console.log(err)
        })
    }

    function deleteTodo(todoId) {
        console.log(todoId)
        Axios.delete('/todo',
            {
                data: {
                      id: todoId
                }
            }
        ).then(dbRes => {
            console.log(dbRes)
            getTodos()
        }).then(err => {
            console.log(err)
        })
    }

    return (
        <Col><Card>
            <Card.Header>
                Task List
            </Card.Header>
            <Card.Body>
                <Table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(task => {
                                return (<tr key={'list_' + task}>
                                    <td >{task.description}</td>
                                    <td >{task.deadline}</td>
                                    <td><Button key={task.id} onClick={deleteTodo.bind(this, task.id)}>Delete</Button></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default TodoList