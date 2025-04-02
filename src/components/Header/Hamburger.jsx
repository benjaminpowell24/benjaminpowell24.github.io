import React from 'react'
import { ThreeBarsIcon } from '@primer/octicons-react'
import { NavList } from '@primer/react'
import { menuItems } from './menu'
import { XIcon } from '@primer/octicons-react'

const Hamburger = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <button
        className="border rounded-sm border-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ThreeBarsIcon size={24} />
      </button>
      {isOpen && (
        <NavList className="w-1/2 md:w-1/3 lg:w-1/4 top-0 left-0 fixed h-screen py-2 bg-[#F5F7FA] dark:bg-[#0d1118] z-99">
          <NavList.Item>
            <NavList.TrailingAction
              style={isDarkMode ? { color: 'white' } : { color: '#1A202C' }}
              label="close"
              icon={<XIcon />}
              onClick={() => setIsOpen(false)}
            ></NavList.TrailingAction>
          </NavList.Item>
          <hr className="bg-[0000001A]" />
          <div className="my-5">
            {menuItems.map((item) => (
              <NavList.Item
                key={item.name}
                href={item.link}
                target={item.target}
                style={isDarkMode ? { color: 'white' } : { color: '#1A202C' }}
              >
                <NavList.LeadingVisual
                  style={isDarkMode ? { color: 'white' } : { color: '#1A202C' }}
                >
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
