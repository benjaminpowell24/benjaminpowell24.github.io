import Navbar from './components/Header/Navbar'
import { ThemeProvider, BaseStyles, SplitPageLayout } from '@primer/react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Profile from './components/Sidepanel/Profile'
import Content from './components/Main/Content'
import Cube from './components/Animation/Cube'

function App() {
  const [user, setUser] = useState(null)
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

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <ThemeProvider>
      <BaseStyles>
        <Cube />
        <div className='max-w-7xl mx-auto'>
          <SplitPageLayout>
            <SplitPageLayout.Header
              divider='none'
              style={{
                borderBottom: '1px solid #3c454d',
              }}
            >
              <Navbar />
            </SplitPageLayout.Header>
            <SplitPageLayout.Pane
              sticky={true}
              divider='none'
              position='start'
              aria-label='Profile'
              className='container mx-auto px-4 py-8 border-b border-[#3c454d] lg:border-r lg:border-b-0'
            >
              <Profile {...user} />
            </SplitPageLayout.Pane>
            <SplitPageLayout.Content>
              <Content />
            </SplitPageLayout.Content>
            <SplitPageLayout.Footer divider='none'>
              <p className='text-center font-medium'>© 2025 Benjamin Powell </p>
            </SplitPageLayout.Footer>
          </SplitPageLayout>
        </div>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
