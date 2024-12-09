import React from 'react'
import AboutHero from '../components1/aboutHero'
import AboutSection from '../components1/aboutSection'
import AboutPopularProduct from '../components1/aboutPopularProduct';

const page = () => {
    return (
      <div>
        <AboutHero />
            <AboutSection />
            <AboutPopularProduct />
            
      </div>
    );
}

export default page