import React from 'react';
import MusicList from '../Layout/MusicList';
import Section from '../UI/Section';

const Home = () => {
  return (
    <Section>
      <h1 className='fs-4 fw-bold'> OUR TOURS </h1>
      <MusicList />
    </Section>
  );
};

export default Home;