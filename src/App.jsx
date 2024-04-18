import React, { useState } from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import DownloadSection from './DownloadSection';
import WatchEverywhereSection from './WatchEverywhereSection';
import KidsSection from './KidsSection';
import Movies from './Movies';
import Watchlist from './Watchlist';
import FAQSection from './FAQSection';
import Footer from './Footer';
import './App.css';

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const movies = [
    { id: 1, name: 'Movie 1', image: 'src/assets/images/1.jpeg' },
    { id: 2, name: 'Movie 2', image: 'src/assets/images/2.jpeg' },
    { id: 3, name: 'Movie 3', image: 'src/assets/images/3.jpeg' },
    { id: 4, name: 'Movie 4', image: 'src/assets/images/4.jpeg' },
    { id: 5, name: 'Movie 5', image: 'src/assets/images/5.jpeg' },
  ];
  const addToWatchlist = (movie) => {
    if (!watchlist.includes(movie)) {
      setWatchlist([...watchlist, movie]);
    }
  };
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <WatchEverywhereSection />
      <KidsSection />
      <Movies movies={movies} addToWatchlist={addToWatchlist} />
      <Watchlist watchlist={watchlist} />
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;
