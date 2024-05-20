
import { useEffect, useState } from 'react'
import './App.css'
import Gallery from './components/Gallery'

function App() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    setIsMobile(mediaQuery.matches)

    const handleResize = () => {
      setIsMobile(mediaQuery.matches)
    }

    mediaQuery.addEventListener('change', handleResize)

    return () => {
      mediaQuery.removeEventListener('change', handleResize)
    }
  }, [])
  
  return (
    <>
      <Gallery isMobile={isMobile} />
    </>
  )
}

export default App
