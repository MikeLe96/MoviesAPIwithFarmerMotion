import React, { useEffect } from 'react'

const Filter = ({ setActiveGenre, activeGenre, setFilterd, popular }) => {
    useEffect(() => {
        if (activeGenre===0){
            setFilterd(popular);
            return;
        }
        const filterd = popular.filter(movie => movie.genre_ids.includes(activeGenre));
        setFilterd(filterd);
    }, [activeGenre]);

  return (
    <div className='filter-container'>
        <button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}> All</button>
        <button className={activeGenre === 28 ? "active" : ""} onClick={() => setActiveGenre(28)}> Action</button>
        <button className={activeGenre === 35 ? "active" : ""} onClick={() => setActiveGenre(35)}>  Comedy</button>
    </div>
  )
}

export default Filter