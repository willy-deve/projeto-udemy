import React from 'react'

interface ListProps {
  a: string
}

const List: React.FC<ListProps> = ({ a }) => {
  return (
    <>
      <h1>Growdev</h1>
      <p>{a}</p>
    </>
  )
}

export default List
