import About from './About'
import Articles from './Articles'
import Projects from './Projects'

const Content = ({ isDarkMode }) => {
  return (
    <>
      <About />
      <Projects isDarkMode={isDarkMode} />
      <Articles />
    </>
  )
}

export default Content
