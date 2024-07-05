import { Character } from "../interfaces"
import { CharacterElement } from "./CharacterElement"
import "../css/CharacterList.css"
import { forwardRef } from "react"

interface Props {
  characters: Character[]
}
export type Ref = HTMLUListElement;

export const CharacterList = forwardRef<Ref, Props>(({characters}: Props, ref) => (
  <ul className="CharacterList-box" ref={ref}>
    {characters.map(character => (
      <CharacterElement key={character.id} character={character} />
    ))}
  </ul>
))