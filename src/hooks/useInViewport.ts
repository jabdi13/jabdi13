import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Character, Response } from "../interfaces";

export function useInViewport<T extends HTMLElement>(ref: React.RefObject<T>, options?: IntersectionObserverInit) {
  const [characters, setCharacters] = useState<Array<Character>>([])
  const nextRef = useRef<string | null>()

  const getConcatData = useCallback(async (innerObserver: IntersectionObserver) => {
    const response = await fetch(nextRef.current as string)
    const result: Response = await response.json()
    setCharacters((prev) => prev.concat(result.results))
    nextRef.current = result.info.next
    if(ref.current) {
      innerObserver.unobserve(ref.current.lastElementChild as Element)
    }
  }, [ref])

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const result: Response = await response.json()
      setCharacters(result.results)
      nextRef.current = result.info.next
    }
    getCharacters()
  }, [])
  
  const observer = useMemo(() => {
    return new IntersectionObserver(async ([entry], innerObserver) => {
      if(entry.isIntersecting) {
        await getConcatData(innerObserver)
      }
    }, options)
  }, [getConcatData, options])

  useEffect(() => {
    const currentRef = ref.current
    
    
    if(currentRef?.lastElementChild) {
      observer.observe(currentRef.lastElementChild as Element)
      return () => {
        observer.unobserve(currentRef)
      }
    }
  }, [options, ref, observer])

  return {characters}
}