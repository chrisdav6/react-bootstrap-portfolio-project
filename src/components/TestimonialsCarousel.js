import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import avatar1 from '../img/avatar-1.png';
import avatar2 from '../img/avatar-2.png';
import avatar3 from '../img/avatar-3.png';
import avatar4 from '../img/avatar-4.png';

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={5000}
    >
      <div className='myCarousel'>
        <img src={avatar1} alt='Avatar 1' />
        <div className='content'>
          <h3>Samphia Dangus</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            aliquam odit earum, sed perspiciatis deleniti qui saepe eos libero
            eius!
          </p>
        </div>
      </div>
      <div className='myCarousel'>
        <img src={avatar2} alt='Avatar 2' />
        <div className='content'>
          <h3>Dr. Steve Brule</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            aliquam odit earum, sed perspiciatis deleniti qui saepe eos libero
            eius!
          </p>
        </div>
      </div>
      <div className='myCarousel'>
        <img src={avatar3} alt='Avatar 3' />
        <div className='content'>
          <h3>Doug Prishpreed</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            aliquam odit earum, sed perspiciatis deleniti qui saepe eos libero
            eius!
          </p>
        </div>
      </div>
      <div className='myCarousel'>
        <img src={avatar4} alt='Avatar 4' />
        <div className='content'>
          <h3>Marcus Corderoy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            aliquam odit earum, sed perspiciatis deleniti qui saepe eos libero
            eius!
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default TestimonialsCarousel;
