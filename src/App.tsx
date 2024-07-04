import { useEffect, useState } from 'react'
import './App.css'
import { Character } from './interfaces'

function App() {
  const [characters, setCharacters] = useState<Array<Character>>([])
  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const result = await response.json()
      console.log(setCharacters(result.results))
    }
    getCharacters()
  }, [])

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Characters</li>
            <li>Locations</li>
            <li>Episodes</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <ul>
            {characters.map(character => (
              <li>{character.name}</li>
            ))}
          </ul>
        </section>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
