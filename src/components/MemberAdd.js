import React from 'react'
import MemberService from "../lib/MemberService";

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
        <h3>Add a Member</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Add Team Member"/>
        </form>
      </div>
    )
  }
}

export default MemberAdd