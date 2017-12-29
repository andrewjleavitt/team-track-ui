import React from 'react'
import {Menu, Container} from 'semantic-ui-react'

function Navigation(props) {
  const focusedMenuItem = props.focusedMenuItem
  const onMenuItemClick = props.onMenuItemClick
  const menuItemsArray = [
    {
      name: 'home',
      focusName: null
    },
    {
      name: 'people',
      focusName: 'people'

    },
    {
      name: 'projects',
      focusName: 'projects'
    },
    {
      name: 'teams',
      focusName: 'teams'
    }
  ]


  const menu_items = menuItemsArray.map((item) => {
    return <Menu.Item key={item.name} onClick={() => onMenuItemClick(item.focusName)}
                      active={focusedMenuItem === item.focusName}>{item.name}</Menu.Item>
  })

  return (
    <Menu text>
      <Container>
        <Menu.Item header>Team Track</Menu.Item>
        {menu_items}
      </Container>
    </Menu>
  )
}

export default Navigation