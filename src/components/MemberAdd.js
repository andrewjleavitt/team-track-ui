import React from 'react'
import MemberService from "../lib/MemberService";
import {Form, Button, Header} from 'semantic-ui-react'

class MemberAdd extends React.Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleSubmit = (event) => {
    const memberName = this.state.name
    MemberService.addMember(memberName, this.props.addMemberToList)
    this.setState({name: ''})
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <Header size='small'>Add a Member</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Field
              control='input'
              label='Name'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit">Add Team Member</Button>
        </Form>
      </div>
    )
  }
}

export default MemberAdd