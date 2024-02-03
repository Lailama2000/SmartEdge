import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useRef, useEffect, useState } from 'react';
import pic1 from'./Media/Group 350.png'
import pic2 from'./Media/Android_logo_(2014-2019).png'
import pic3 from'./Media/iOS_logo_PNG_(10).png'
import pic4 from'./Media/Laravel.png'
import pic5 from'./Media/Ps.png'
import pic6 from'./Media/Ai.png'
import pic7 from'./Media/Xd.png'
import pic8 from'./Media/1667px-Figma-logo.svg.png'
import pic9 from'./Media/WordPress_blue_logo.svg.png'
import pic10 from'./Media/CPanel New.png'
import pic11 from'./Media/Swift_logo.svg.png'
import pic12 from'./Media/Java_logo_PNG1.png'
import {useMediaQuery } from '@mui/material';

export default function Technologies() {
  const matches = useMediaQuery('(min-width:670px)');
  const [autoplayInterval, setAutoplayInterval] = useState(null);
  const sliderRef = useRef(null);
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isMouseDown = true;
    sliderRef.current.classList.add('active');
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isMouseDown = false;
    sliderRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    isMouseDown = false;
    sliderRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    const newScrollLeft = Math.max(0, Math.min(scrollLeft - walk, maxScrollLeft));
    sliderRef.current.scrollLeft = newScrollLeft;
  };

  const handleTouchStart = (e) => {
    isMouseDown = true;
    sliderRef.current.classList.add('active');
    startX = e.touches[0].clientX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    isMouseDown = false;
    sliderRef.current.classList.remove('active');
  };

  const handleTouchMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.touches[0].clientX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    const newScrollLeft = Math.max(0, Math.min(scrollLeft - walk, maxScrollLeft));
    sliderRef.current.scrollLeft = newScrollLeft;
  };

  const startAutoplay = () => {
    setAutoplayInterval(setInterval(autoplaySlider, 100));
  };

  const stopAutoplay = () => {
    clearInterval(autoplayInterval);
    setAutoplayInterval(null);
  };

  const autoplaySlider = () => {
    const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    const currentScrollLeft = sliderRef.current.scrollLeft;
    const newScrollLeft = currentScrollLeft + 1;
    if (newScrollLeft >= maxScrollLeft) {
      sliderRef.current.scrollLeft = 0;
    } else {
      sliderRef.current.scrollLeft = newScrollLeft;
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchend', handleTouchEnd);
    slider.addEventListener('touchmove', handleTouchMove);

    startAutoplay();

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);

      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchend', handleTouchEnd);
      slider.removeEventListener('touchmove', handleTouchMove);

      stopAutoplay();
    };
  }, []);

  return (
    <div style={{ height: '80px', backgroundColor: 'white' }}>
      <Stack direction="row" gap={2}>
        <Typography
          sx={{
            fontSize: matches?'17px':'15px',
            padding: '5px',
            fontWeight: 'bolder',
            color: '#0854C1',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Technologies & Frameworks
        </Typography>
        <div
          ref={sliderRef}
          className="slider"
        >
          <div
            className="slide-track"
            style={{
              display: 'flex',
              width: 'calc(250px * 14)',
              animation: 'none',
            }}
          >
            <div className="slide">
              <img
                src={pic1}
                height="60"
                width="60"
                style={{objectFit:'fill'}}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={pic2}
                height="40"
                width="40"
                style={{objectFit:'fill'}}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={pic3}
                height="40"
                width="40"
                style={{objectFit:'fill'}}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={pic4}
                height="70"
                width="70"
                style={{objectFit:'fill'}}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={pic5}
                height="40"
                width="40"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={pic6}
                height="40"
                width="40"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={pic7}
                height="40"
                width="40"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={pic8}
                height="40"
                width="40"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={pic9}
                height="40"
                width="40"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={pic10}
                height="60"
                width="60"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={pic11}
                height="40"
                width="40"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={pic12}
                height="40"
                width="40"
                alt=""
              />
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
}