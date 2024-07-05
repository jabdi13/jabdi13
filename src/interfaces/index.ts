export interface Response {
  info: Info
  results: Character[]
}

export interface Info {
  count: number
  pages: number
  next: null | string
  prev: null | string
}

export interface Character {
  id: number
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  type: string
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: Array<string>
  url: string
  created: string
}

export interface Location {
  id: number
  name: string
  type: string
  dimension: string
  residents: Array<string>
  url: string
  created: string
}

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: Array<string>
  url: string
  created: string
}