import React, {Component} from 'react'
import { Card, CardSection, Input, Button } from './common/index'
import { emailChanged, passwordChanged } from '../actions/index'
import { connect } from 'react-redux'

class LogInForm extends Component {
  
  onEmailChange(text){
    this.props.emailChanged(text)
  }
  
  onPasswordChange(text){
    this.props.passwordChanged(text)
  }

  render(){
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='your@email.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
          
        <CardSection>
        < Input
            label='Password'
            placeholder='password'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
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

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LogInForm)
