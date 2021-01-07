import React from 'react';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
import cityGuide from '../img/city-guide-app.png';
import blog from '../img/mern-blog.png';
import netflix from '../img/netflix.png';
import taskManager from '../img/task-manager.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  const openPopupBoxNetflix = () => {
    const content = (
      <div>
        <img className='portfolio-image-popupbox' src={netflix} alt='Netflix' />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
          eligendi.
        </p>
      </div>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: 'Neflix'
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  const openPopupBoxCity = () => {
    const content = (
      <div>
        <img
          className='portfolio-image-popupbox'
          src={cityGuide}
          alt='City Guide'
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
          eligendi.
        </p>
      </div>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCity = {
    titleBar: {
      enable: true,
      text: 'City Guide'
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  const openPopupBoxBlog = () => {
    const content = (
      <div>
        <img className='portfolio-image-popupbox' src={blog} alt='Blog' />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
          eligendi.
        </p>
      </div>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigBlog = {
    titleBar: {
      enable: true,
      text: 'Blog'
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  const openPopupBoxTask = () => {
    const content = (
      <div>
        <img
          className='portfolio-image-popupbox'
          src={taskManager}
          alt='Task Manager'
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
          eligendi.
        </p>
      </div>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTask = {
    titleBar: {
      enable: true,
      text: 'Task Manager'
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  return (
    <div className='portfolio'>
      <div className='container'>
        <h1>Portfolio</h1>

        <div className='row image-box-wrapper'>
          <div className='portfolio-image-box' onClick={openPopupBoxCity}>
            <img className='portfolio-image' src={cityGuide} alt='City Guide' />
            <div className='overflow'>
              <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
            </div>
          </div>
          <div className='portfolio-image-box' onClick={openPopupBoxBlog}>
            <img className='portfolio-image' src={blog} alt='Blog' />
            <div className='overflow'>
              <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
            </div>
          </div>
          <div className='portfolio-image-box' onClick={openPopupBoxNetflix}>
            <img className='portfolio-image' src={netflix} alt='Netflix' />
            <div className='overflow'>
              <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
            </div>
          </div>
          <div className='portfolio-image-box' onClick={openPopupBoxTask}>
            <img
              className='portfolio-image'
              src={taskManager}
              alt='Task Mangaer'
            />
            <div className='overflow'>
              <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
            </div>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigCity} />
      <PopupboxContainer {...popupboxConfigBlog} />
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigTask} />
    </div>
  );
};

export default Portfolio;
