import React, { Component } from 'react'
import { Picker, Text } from 'react-native'
import { Card, CardSection, Button, Input} from './common/index'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions/index'

class EmployeeCreate extends Component {

  onButtonPress(){
    const { name, phone, shift } = this.props

    this.props.employeeCreate({ name, phone, shift })
  }

  render(){

    return(
      <Card>
        <CardSection>
          <Input 
            label='Name' 
            placeholder='Bob' 
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input 
            label='Phone' 
            placeholder='555-555-5555' 
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={styles.pickerContainerStyle}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker 
            style= {{flex: 1}}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label={`Monday`} value={`Monday`} />
            <Picker.Item label={`Tueday`} value={`Tueday`} /> 
            <Picker.Item label={`Wednesday`} value={`Wednesday`} />
            <Picker.Item label={`Thurday`} value={`Thurday`} />
            <Picker.Item label={`Friday`} value={`Friday`} />
            <Picker.Item label={`Saturday`} value={`Saturday`} />
            <Picker.Item label={`Sunday`} value={`Sunday`} />
          </Picker>
        </CardSection>
        
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles={
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  pickerContainerStyle: {
    flexDirection: 'column',
    height: 100
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm

  return { name, phone, shift }
}

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmployeeCreate)
