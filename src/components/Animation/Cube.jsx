import React from 'react'
import '../../style/cube.css'
import {
  faAws,
  faGitSquare,
  faJs,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cube = () => {
  return (
    <div className='fab-container'>
      <div className='cube'>
        <div className='face front'>
          <div className='node'>
            <FontAwesomeIcon icon={faNodeJs} size='2xl' />
          </div>
        </div>
        <div className='face back'>
          <div className='react'>
            <FontAwesomeIcon icon={faReact} size='2xl' />
          </div>
        </div>
        <div className='face left'>
          <div className='aws'>
            <FontAwesomeIcon icon={faAws} size='2xl' />
          </div>
        </div>
        <div className='face right'>
          <div className='node'>
            <FontAwesomeIcon icon={faNodeJs} size='2xl' />
          </div>
        </div>
        <div className='face top'>
          <div className='js'>
            <FontAwesomeIcon icon={faPython} size='2xl' />
          </div>
        </div>
        <div className='face bottom'>
          <div className='git'>
            <FontAwesomeIcon icon={faGitSquare} size='2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cube
