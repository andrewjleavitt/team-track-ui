import React from 'react'

const TeamItem = ({onClick, active, team}) => {
    return (
        <li onClick={onClick} style={{textDecoration: active ? 'none' : 'line-through'}}>
            {team.name}
        </li>
    )
}

export default TeamItem