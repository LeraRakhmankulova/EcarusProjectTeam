import React, { FC, useEffect } from 'react'

interface Props{
    gender:any,
    setFiltered:any,
    activeCard:any,
    setActiveCard:any
}


 const Filter:FC<Props> = ({gender, setFiltered, activeCard, setActiveCard}) =>{
     useEffect(() => {
         if (activeCard === 0){
             setFiltered(gender);
             return;
         }
         const filtered = gender.filter((product: { gender: any }) =>
         product.gender.includes(activeCard));
         setFiltered(filtered),[activeCard]
     })
  return (
    <div>
        <button onClick={() => setActiveCard(0)}>All</button>
        <button onClick={() => setActiveCard(0)}>Men</button>
        <button onClick={() => setActiveCard(0)}>Women</button>
    </div>
  )
}

export default Filter;