import React from 'react'

function TeamMembers(props) {
    const team = props.team
    const members = props.members

    const memberList = members.map((member) => {
        return <li key={member}>{member.name}</li>
    })

    return (
        <div>
            <h2>{team.name}</h2>
            <p>Members for {team.name} goes here</p>
            {memberList}
        </div>
    )
}

export default TeamMembers