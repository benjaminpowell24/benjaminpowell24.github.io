import About from './About'
import Articles from './Articles'
import Projects from './Projects'
import Skills from './Skills'

const Content = ({ isDarkMode }) => {
  return (
    <>
      <About />
      <Skills/>
      <Projects isDarkMode={isDarkMode} />
      <Articles />
    </>
  )
}

export default Content
