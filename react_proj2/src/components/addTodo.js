import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { Card, InputGroup, FormControl, Col, Button } from 'react-bootstrap'


function AddTodo(){
    let history = useHistory();

    let [model, update] = useState({
        description: "",
        deadline: ""
    })

    function changeVal(event) {
        let obj = Object.assign({}, model)
        obj[event.target.name] = event.target.value
        update(obj)
    }

    function submit(e) {
        e.preventDefault()
        axios.post('/add/todo', model)
        .then( (response) => {
          if (response && response.data && response.data.name !== 'SequelizeDatabaseError'){
            history.push('/list')
            console.log(response)
          } else {
            throw response
          }
        }).catch((err) => {
          throw err
        })
      }

    return <Col><Card>
        <Card.Header>
            Add a task
    </Card.Header>
        <Card.Body>
            <form onSubmit={submit}>
                <InputGroup>
                    {Object.keys(model).map((item) => {
                        return (
                            <Col key={'form_' + item} lg={12} style={{ marginBottom: '10px' }}>
                                {item.charAt(0).toUpperCase() + item.slice(1)}<FormControl
                                    type={item === 'password' ? 'password' : 'text'}
                                    placeholder={item.charAt(0).toUpperCase() + item.slice(1)}
                                    name={item}
                                    aria-label={item}
                                    onChange={changeVal}
                                >
                                </FormControl>
                            </Col>
                        )
                    })}
                </InputGroup>
                <Button type="submit">Submit</Button>
            </form>
        </Card.Body>
    </Card>
    </Col>
}

export default AddTodo