import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion';

function App() {

  const apikey = `58d64517089493e3d9e00e86225fb28e`;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;

  const [activeGenre, setActiveGenre] = useState(0);
  const [filterd, setFilterd] = useState([]);
  const [popular, setPopular] = useState([]);

  const fetchPopular = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setPopular(data.results);
    setFilterd(data.results);
  }

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="App">
      <Filter popular={popular} activeGenre={activeGenre} setActiveGenre={setActiveGenre} setFilterd={setFilterd} />
      <motion.div layout className='popular-movies'>
        <AnimatePresence>
        {filterd.map((movie) => (<Movie key={movie.id} movie={movie}></Movie>))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
