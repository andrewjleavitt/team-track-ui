import React from 'react'
import {Menu, Container} from 'semantic-ui-react'

function Navigation(props) {
  const focusedMenuItem = props.focusedMenuItem
  const onMenuItemClick = props.onMenuItemClick
  const menuItemsArray = ['people', 'projects', 'teams']

  const menu_items = menuItemsArray.map((item) => {
    return <Menu.Item key={item} onClick={() => onMenuItemClick(item)}
                      active={focusedMenuItem === item}>{item}</Menu.Item>
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