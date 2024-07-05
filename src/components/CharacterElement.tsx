import { Character } from "../interfaces"
import "../css/CharacterElement.css"

interface Props {
  character: Character
}
export const CharacterElement = ({ character }: Props) => {
  return (
    <li className="CharacterElement-box">
      <div className="CharacterImg-box">
        <img className={`${character.status === 'Dead' ? 'grayFilter' : ''}`} src={character.image} alt="" />
      </div>
      <p className="bold">Name: {character.name}</p>
      <p>Location: {character.location.name}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Specie: {character.species}</p>
      {character.status === 'Alive' && <p className="alive">Status: {character.status} ✅</p>}
      {character.status === 'Dead' && <p className="dead">Status: {character.status} ❌</p>}
      {character.status === 'unknown' && <p>Status: {character.status} ❓</p>}
    </li>
  )
}