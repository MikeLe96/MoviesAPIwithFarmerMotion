import React from 'react'
import { motion } from 'framer-motion'
const Movie = ({movie}) => {
  return (
    <motion.div layout animate={{ opacity:1}} initial={{opacity:0}} exit={{ opacity:0 }} >
        <h5>{movie.title}</h5>
        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title} />
    </motion.div>
  )
}

export default Movie