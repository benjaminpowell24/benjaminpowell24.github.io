import React from 'react'
import { ThreeBarsIcon } from '@primer/octicons-react'
import { NavList } from '@primer/react'
import { menuItems } from '../menu'
import { PersonFillIcon, XIcon } from '@primer/octicons-react'

const Hamburger = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <ThreeBarsIcon size={24} />
        {isOpen && (
          <NavList
            className='top-0 left-0 fixed h-screen'
            style={{ backgroundColor: '#0d1118', width: '25vw' }}
          >
            <NavList.Item href=''>
              <NavList.LeadingVisual>
                <PersonFillIcon size={24} />
              </NavList.LeadingVisual>
              <NavList.TrailingAction
                label='close'
                icon={<XIcon />}
                onClick={() => setIsOpen(false)}
              ></NavList.TrailingAction>
            </NavList.Item>
            {menuItems.map((item) => (
              <NavList.Item href={item.link}>
                <NavList.LeadingVisual>{item.icon}</NavList.LeadingVisual>
                {item.name}
              </NavList.Item>
            ))}
          </NavList>
        )}
      </button>
    </div>
  )
}

export default Hamburger
