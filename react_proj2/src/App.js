import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import {Nav} from 'react-bootstrap'

function App() {
  const Links = [
    {
      'name': 'Add Task',
      'to' : '/add'
    },
    {
      'name': 'View Task',
      'to' : '/list'
    }
  ]
  return (
    <Router>
      <div>
        <Nav>
          {
            Links.map((link) => {
              return (
                <Nav.Item>
                  <Nav.Link as={Link} to={link.to}>
                    {link.name}
                  </Nav.Link>
                </Nav.Item>
              )
            })
          }
        </Nav>
        <Switch>
          <Route path='/add'>
            <AddTodo />
          </Route>
          <Route path='/list'>
            <TodoList />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
