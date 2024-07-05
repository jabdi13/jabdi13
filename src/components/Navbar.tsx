import '../css/Navbar.css'
import logo from '../assets/Rick_and_Morty.png'

export const Navbar = () => {
  return (
    <nav className='Navbar'>
      <img src={logo} width={300} alt="Rick and Morty logo" />
      <ul>
        <li>Characters</li>
        <li>Locations</li>
        <li>Episodes</li>
      </ul>
    </nav>
  )
}