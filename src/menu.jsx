import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faTwitter,
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
  { name: 'Overview', link: '', icon: <BookIcon /> },
  { name: 'Projects', link: '', icon: <TableIcon /> },
  { name: 'Resume', link: '', icon: <LogIcon /> },
  { name: 'About', link: '', icon: <PersonIcon /> },
  { name: 'Medium', link: '', icon: <ItalicIcon /> },
]

export const socials = [
  { name: 'LinkedIn', link: '', icon: faLinkedin },
  { name: 'GitHub', link: '', icon: faGithub },
  { name: 'Twitter', link: '', icon: faTwitter },
  { name: 'Discord', link: '', icon: faDiscord },
  { name: 'Email', link: '', icon: faEnvelope },
]
