import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import 'antd/dist/antd.css'
import './index.css'

import Store from './configs/store'
import RegistrationForm from './containers/RegistrationForm'
import SummaryPage from './containers/SummaryPage'

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Route path='/registration' component={RegistrationForm} />
        <Route path='/summary' component={SummaryPage} />
        <Redirect to='/registration' />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
