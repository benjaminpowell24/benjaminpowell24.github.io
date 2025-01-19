import React from 'react'
import { ThreeBarsIcon } from '@primer/octicons-react'
import { NavList } from '@primer/react'
import { menuItems } from '../menu'
import { PersonFillIcon, XIcon } from '@primer/octicons-react'

const Hamburger = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <button
        className='border rounded-sm border-white'
        onClick={() => setIsOpen(!isOpen)}
      >
        <ThreeBarsIcon size={24} />
      </button>
      {isOpen && (
        <NavList
          className='w-1/2 md:w-1/3 lg:w-1/4 top-0 left-0 fixed h-screen py-2'
          style={{ backgroundColor: '#0d1118' }}
        >
          <NavList.Item>
            <NavList.LeadingVisual style={{ color: 'white' }}>
              <PersonFillIcon size={24} />
            </NavList.LeadingVisual>
            <NavList.TrailingAction
              label='close'
              icon={<XIcon />}
              onClick={() => setIsOpen(false)}
              style={{ color: 'white' }}
            ></NavList.TrailingAction>
          </NavList.Item>
          <div className='my-5'>
            {menuItems.map((item) => (
              <NavList.Item
                key={item.name}
                href={item.link}
                target={item.target}
                style={{ color: 'white' }}
              >
                <NavList.LeadingVisual style={{ color: 'white' }}>
                  {item.icon}
                </NavList.LeadingVisual>
                {item.name}
              </NavList.Item>
            ))}
          </div>
        </NavList>
      )}
    </div>
  )
}

export default Hamburger
