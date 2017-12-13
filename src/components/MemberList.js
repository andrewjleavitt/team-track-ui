import React from 'react'

function MemberList(props) {
    const team = props.team
    const members = props.members

    const memberList = members.map((member) => {
        return <li key={member.name}>{member.name}</li>
    })

    return (
        <div>
            <h2>{team.name}</h2>
            <p>Members for {team.name} goes here</p>
            {memberList}
        </div>
    )
}

export default MemberList