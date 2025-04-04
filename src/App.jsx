import Navbar from './components/Header/Navbar'
import { ThemeProvider, BaseStyles, SplitPageLayout } from '@primer/react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Profile from './components/Sidepanel/Profile'
import Content from './components/Main/Content'

function App() {
  const [user, setUser] = useState(null)

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode ? JSON.parse(savedMode) : false
  })

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem('darkMode', JSON.stringify(newMode))
      return newMode
    })
  }
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        'https://api.github.com/users/benjaminpowell24'
      )

      console.log(response.data)
      setUser(response.data)
    }

    fetchUser()
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkMode])

  if (!user) {
    return (
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    )
  }

  return (
    <div className="bg-[#F5F7FA] dark:bg-[#0d1118] text-[#1A202C] dark:text-white">
      <ThemeProvider>
        <BaseStyles>
          <div className="max-w-7xl mx-auto">
            <SplitPageLayout>
              <SplitPageLayout.Header
                divider="none"
                style={
                  isDarkMode
                    ? {
                        borderBottom: '1px solid #3c454d',
                      }
                    : {
                        borderBottom: '1px solid #0000001A',
                      }
                }
              >
                <Navbar
                  toggleDarkMode={toggleDarkMode}
                  isDarkMode={isDarkMode}
                />
              </SplitPageLayout.Header>
              <SplitPageLayout.Pane
                sticky={true}
                divider="none"
                position="start"
                aria-label="Profile"
                className="container mx-auto px-4 py-8 border-b border-[#0000001A] dark:border-[#3c454d] lg:border-r md:border-b-0"
              >
                <Profile {...user} />
              </SplitPageLayout.Pane>
              <SplitPageLayout.Content>
                <Content isDarkMode={isDarkMode} />
              </SplitPageLayout.Content>
              <SplitPageLayout.Footer divider="none">
                <p className="text-center font-medium text-xs">
                  © 2025 Benjamin Powell. All rights reserved.
                </p>
              </SplitPageLayout.Footer>
            </SplitPageLayout>
          </div>
        </BaseStyles>
      </ThemeProvider>
    </div>
  )
}

export default App
