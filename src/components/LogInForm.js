import React, {Component} from 'react'
import { Card, CardSection, Input, Button } from './common/index'
import { emailChanged } from '../actions/index'
import { connect } from 'react-redux'

class LogInForm extends Component {
  
  onEmailChange(text){
    this.props.emailChanged(text)
  }
  
  render(){
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='your@email.com'
            onChangeText={this.onEmailChange.bind(this)}
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

export default connect(null, { emailChanged })(LogInForm)
