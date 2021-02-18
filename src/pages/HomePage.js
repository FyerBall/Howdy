import React from 'react';
import { Link } from 'react-router-dom';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Button from '../Helpers/Button';

function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <Link to='/demo/'>
        <Button classes='primary--btn-center'>Try it now</Button>
      </Link>
    </div>
  );
}

export default HomePage;
