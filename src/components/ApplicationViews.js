import { Route, Redirect } from "react-router-dom";
import React from "react";
import AccountForm from './AccountForm'
import TaskList from './tasks/TaskList'

const ApplicationViews = props => {
  const hasUser = props.hasUser
  const setUser = props.setUser

  return (
    <>
      <Route exact path="/" render={props => 
        hasUser ? null : <Redirect to="/login" />
      } />
      <Route path="/friends" render={props => 
        hasUser ? null : <Redirect to="/login" />
      } />
      <Route path="/messages" render={props => 
        hasUser ? null : <Redirect to="/login" />
      } />
      <Route exact path="/tasks" render={props => 
        hasUser ? <TaskList {...props} /> : <Redirect to="/login" />
      } />
      <Route path="/tasks/add" render={props => 
        hasUser ? null : <Redirect to="/login" />
      } />
      <Route path="/login" render={props => {
        return <AccountForm {...props} setUser={setUser} />
      }} />
    </>
  );
}

export default ApplicationViews
