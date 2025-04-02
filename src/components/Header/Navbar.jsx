import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { menuItems, socials } from './menu'
import Hamburger from './Hamburger'
import { MoonIcon, SunIcon } from '@primer/octicons-react'

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav>
      <div className="container mx-4 h-20 grid content-between">
        <div className="mx-4 flex justify-end">
          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-white p-1 rounded hover:bg-[#0000001A] dark:hover:bg-cyan-500"
          >
            {isDarkMode ? <MoonIcon size={20} /> : <SunIcon size={20} />}
          </button>
        </div>
        <div className="flex justify-between">
          <div>
            <ul className="hidden lg:flex space-x-4">
              {menuItems.map((item) => (
                <li key={item.name} className="dark:text-white">
                  <a
                    href={item.link}
                    target={item.target}
                    className="flex items-center hover:text-cyan-500"
                  >
                    {item.icon}
                    <span className="px-2">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="visible lg:hidden">
              <Hamburger isDarkMode={isDarkMode} />
            </div>
          </div>
          <div>
            <ul className="flex space-x-4 mx-4">
              {socials.map((social) => (
                <li key={social.name} className="dark:text-white">
                  <a
                    href={social.link}
                    target="_blank"
                    className="flex items-center hover:text-cyan-500"
                  >
                    <FontAwesomeIcon icon={social.icon} size="lg" />
                    <span className="hidden lg:inline px-2">{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
