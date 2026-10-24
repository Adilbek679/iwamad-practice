import { createContext, useContext, useState, type ReactNode } from 'react'

type LikesContextValue = { likes: number; addLike: () => void }

const LikesContext = createContext<LikesContextValue | null>(null)

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState(0)

  function addLike() {
    setLikes(likes + 1)
  }

  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {children}
    </LikesContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLikes() {
  const value = useContext(LikesContext)
  if (value === null) {
    throw new Error('useLikes must be used inside LikesProvider')
  }
  return value
}
