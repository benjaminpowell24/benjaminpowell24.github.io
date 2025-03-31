import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { menuItems, socials } from './menu'
import Hamburger from './Hamburger'

const Navbar = () => {
  return (
    <nav>
      <div className='container mx-4 h-20 grid content-between'>
        <div className='flex'>
          <p className='text-lg text-white'>
            <span className='text-cyan-500'>$BEN</span>
          </p>
        </div>
        <div className='columns-2'>
          <div className='flex justify-start'>
            <ul className='hidden lg:flex space-x-4'>
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    target={item.target}
                    className='flex items-center hover:text-cyan-500'
                  >
                    {item.icon}
                    <span className='px-2'>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className='visible lg:hidden'>
              <Hamburger />
            </div>
          </div>
          <div className='flex justify-end mx-2'>
            <ul className='flex space-x-4'>
              {socials.map((social) => (
                <li key={social.name} className='text-white'>
                  <a
                    href={social.link}
                    target='_blank'
                    className='flex items-center hover:text-cyan-500'
                  >
                    <FontAwesomeIcon icon={social.icon} size='lg' />
                    <span className='hidden lg:inline px-2'>{social.name}</span>
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
