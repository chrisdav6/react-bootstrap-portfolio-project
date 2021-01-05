import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className='services'>
      <h1>My Services</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size='2x'
                  className='icon'
                />
              </div>
              <h3>Web Development</h3>
              <p>
                My country send me to United States to make movie-film. Please,
                come and see my film. If it not success, I will be execute.
              </p>
            </div>
          </div>
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon icon={faGoogle} size='2x' className='icon' />
              </div>
              <h3>Web Design</h3>
              <p>
                Bing bong bing-bong-bing, dl-dl-ding-ding *click* *click*
                *click-click*, bing bong bing-bong-bing, dl-dl-ding-ding *click*
                *click*...
              </p>
            </div>
          </div>
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon icon={faDesktop} size='2x' className='icon' />
              </div>
              <h3>Social Media</h3>
              <p>
                I arrived in America's airport with clothings, US dollars, and a
                jar of gypsy tears to protect me from AIDS.
              </p>
            </div>
          </div>
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon icon={faFileCode} size='2x' className='icon' />
              </div>
              <h3>Google Analytics</h3>
              <p>
                When you chase a dream, especially one with plastic chests, you
                sometimes do not see what is right in front of you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
