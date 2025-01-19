import Navbar from './components/Header/Navbar'
import { ThemeProvider, BaseStyles, SplitPageLayout } from '@primer/react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Profile from './components/Sidepanel/Profile'
import Content from './components/Main/Content'

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
        <SplitPageLayout>
          <SplitPageLayout.Header
            divider='none'
            style={{ backgroundColor: 'black' }}
          >
            <Navbar />
          </SplitPageLayout.Header>
          <SplitPageLayout.Pane
            position='start'
            aria-label='Profile'
            width={{ min: '200px', default: '400px', max: '500px' }}
            className='container mx-auto px-4 py-8'
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
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
