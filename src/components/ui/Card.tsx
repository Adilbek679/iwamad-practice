import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  id?: string
}

function Card({ children, id }: CardProps) {
  return (
    <article className="card" id={id}>
      {children}
    </article>
  )
}

export default Card
