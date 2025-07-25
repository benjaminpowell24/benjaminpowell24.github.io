import {
  OrganizationIcon,
  LocationIcon,
  MailIcon,
} from '@primer/octicons-react'
import {
  faLinkedin,
  faXTwitter,
  faDiscord,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Profile = ({
  avatar_url,
  followers,
  following,
  company,
  location,
  twitter_username,
  bio,
  login,
  html_url,
}) => {
  return (
    <section className='container mx-auto px-4 py-8 justify-items-center lg:justify-items-end'>
      <div>
        <div className='flex md:flex-col items-center md:items-start'>
          <div className='mx-4 md:mx-0'>
            <h1 className='text-2xl font-bold'>Benjamin Powell</h1>
            <p className='text-xl'>{bio}</p>
          </div>
        </div>
        <p className='my-5'>
          Full Stack, Cross-platform Mobile, Embedded Systems, Technical Writer.
        </p>
        <a
          href='https://www.purplewave.com/'
          className='flex items-center hover:text-cyan-500'
        >
          <OrganizationIcon />
          <span className='px-2'>{company}</span>
        </a>
        <a
          href='mailto:benjaminpowell24@gmail.com'
          className='flex items-center hover:text-cyan-500'
        >
          <MailIcon />
          <span className='px-2'>benjaminpowell24@gmail.com</span>
        </a>
        <a href={html_url} className='flex items-center hover:text-cyan-500'>
          <FontAwesomeIcon icon={faGithub} />
          <span className='px-2'>{login}</span>
        </a>
        <a
          href='https://www.linkedin.com/in/benjamin-powell-9123bb167/'
          className='flex items-center hover:text-cyan-500'
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <span className='px-2'>Benjamin Powell</span>
        </a>
        <a
          href='https://twitter.com/Powell_001'
          className='flex items-center hover:text-cyan-500'
        >
          <FontAwesomeIcon icon={faXTwitter} />
          <span className='px-2'>{twitter_username}</span>
        </a>
        <div className='my-5'>
          <button className='rounded-full bg-cyan-500 dark:bg-sky-500 text-white px-4 py-2 hover:bg-cyan-600 dark:hover:bg-sky-600'>          
            <a href="https://calendly.com/benjaminpowell24/30min" target="_blank" rel="noopener">Book a free 30-min meeting</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Profile
