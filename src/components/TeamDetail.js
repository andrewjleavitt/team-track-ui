import React, {Component} from 'react'
import TeamClose from './TeamClose'

class TeamDetail extends Component {

  render() {
    const onTeamCloseClick = this.props.onTeamCloseClick
    return (
      <div>
        <span>Drag a member to add to this team</span>
        <TeamClose onTeamCloseClick={onTeamCloseClick}/>
      </div>
    )
  }
}

export default TeamDetail