import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection, Input, Button } from './common/index'
import { emailChanged, passwordChanged, loginUser } from '../actions/index'
import { connect } from 'react-redux'

class LogInForm extends Component {
  
  onEmailChange(text){
    this.props.emailChanged(text)
  }
  
  onPasswordChange(text){
    this.props.passwordChanged(text)
  }

  onButtonPress() {
    const { email, password } = this.props
    this.props.loginUser({email, password})
  }

  renderError(){
    if (this.props.error){
      return(
        <View style={styles.errorContainerStyle}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
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
            secureTextEntry={true}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
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
    password: state.auth.password,
    error: state.auth.error
  }
}


const styles = {
  errorContainerStyle: {
    backgroundColor: 'white'
  },
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
}

export default connect(mapStateToProps, { 
  emailChanged, passwordChanged, loginUser 
})(LogInForm)
