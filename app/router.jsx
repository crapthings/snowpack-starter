import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import HomeComponent from './components/home'

export default () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomeComponent} exact />
      </Switch>
    </Router>
  )
}
