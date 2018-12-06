import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LogInForm'
import EmployeeList from './components/EmployeeList'

const RouterComponent = () => {
  return(
    <Router>
      <Scene key='root'>
        <Scene 
          key='login' 
          component={LoginForm} 
          title='Please Login' 
          initial
        />
        <Scene 
          key='employee_list'
          component={EmployeeList}
          title='Employees'
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent
