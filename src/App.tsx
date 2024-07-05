import { useRef } from 'react'
import { Navbar } from './components/Navbar'
import { CharacterList } from './components/CharacterList'
import { useInViewport } from './hooks/useInViewport'

function App() {
  const lastRef = useRef(null)
  
  
  const { characters } = useInViewport(lastRef, { threshold: 0.5 })

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <CharacterList ref={lastRef} characters={characters} />
        </section>
      </main>
    </>
  )
}

export default App
