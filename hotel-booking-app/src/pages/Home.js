import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRoom';
import StyledHero from '../components/StyledHero';
export default function Home() {
  return (
    <>
    <Hero>
      <Banner title="Posh rooms" subtitle="Luxurious rooms starting at cool price, Look no further!">
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
        <Link to="/book-now" className="btn-primary">
         Book Now
        </Link>
      </Banner>
    </Hero>
    <Services />
    <FeaturedRooms />
    <StyledHero />
    </>
  );
}
