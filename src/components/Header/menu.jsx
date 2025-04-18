import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'
import {
  BookIcon,
  ItalicIcon,
  LogIcon,
  PersonIcon,
  TableIcon,
} from '@primer/octicons-react'

export const menuItems = [
  { name: 'Overview', link: '/', icon: <PersonIcon /> },
  {
    name: 'Resume',
    link: 'https://firebasestorage.googleapis.com/v0/b/benjaminpowell-portfolio.appspot.com/o/Powell_Benjamin_Resume.pdf?alt=media&token=8aac7fe9-5e4e-442c-90be-c342de1c84db',
    target: '_blank',
    icon: <LogIcon />,
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@benjaminpowell24',
    target: '_blank',
    icon: <ItalicIcon />,
  },
]

export const socials = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/benjamin-powell-9123bb167/',
    icon: faLinkedin,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/benjaminpowell24',
    icon: faGithub,
  },
  { name: 'X', link: 'https://twitter.com/Powell_001', icon: faXTwitter },
  {
    name: 'Discord',
    link: 'https://discordapp.com/users/1051863871989751818',
    icon: faDiscord,
  },
  {
    name: 'Email',
    link: 'mailto:benjaminpowell24@gmail.com',
    icon: faEnvelope,
  },
]
