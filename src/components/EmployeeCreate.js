import React, { Component } from 'react'
import { Card, CardSection, Button, Input} from './common/index'

class EmployeeCreate extends Component {
  render(){
    return(
      <Card>
        <CardSection>
          <Input label='Name' placeholder='Bob' />
        </CardSection>

        <CardSection>
          <Input label='Phone' placeholder='555-555-5555' />
        </CardSection>

        <CardSection>

        </CardSection>
        
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default EmployeeCreate
