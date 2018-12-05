import React, {Component} from 'react'
import { Card, CardSection, Input, Button } from './common/index'

class LogInForm extends Component {
  render(){
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='your@email.com'
          />
        </CardSection>
          
        <CardSection>
        < Input
            label='Password'
            placeholder='password'
          />
        </CardSection>
          
        <CardSection>
          <Button>
            Log In! 
          </Button>
        </CardSection>

      </Card>
    )
  }
}

export default LogInForm
