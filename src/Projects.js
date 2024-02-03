import React, { useState } from 'react';
import bg from './Media/Path.png';
import { Container, Stack, Typography, useMediaQuery, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import pic from './Media/React-Symbol.png';
import lab from './Media/1463 copy.png';
import mob from './Media/dr-care.png';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const matches = useMediaQuery('(min-width:620px)');

  const slides = [
    {
      images: [
        {
          im: pic,
        },
        {
          im: pic,
        },
      ],
      description: 'Description 1',
    },
    {
      images: [
        {
          im: pic,
        },
        {
          im: pic,
        },
      ],
      description: 'Description 2',
    },
    {
      images: [
        {
          im: pic,
        },
        {
          im: pic,
        },
      ],
      description: 'Description 3',
    },
  ];

  const handleStepClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
    id='Previous Projects'
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundColor: 'black',
        height: '900px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          bgcolor: '#000000',
          width: '250px',
          borderRadius: '40px',
          padding: '10px',
        }}
      >
        <Typography
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
        >
          Previous Projects
        </Typography>
      </Box>
      <Container>
        <div className="sliderr-container">
          <div className="stepss">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`stepp ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleStepClick(index)}
              >
                {index + 1}
                {index === activeIndex && index !== slides.length - 1 && (
                  <div className="line" />
                )}
              </div>
            ))}
          </div>
          <div className="sliderr">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slidee ${index === activeIndex ? 'active' : ''}`}
              >
                <Stack
                  direction="row"
                  gap={2}
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                    {/* <img src={lab} style={{position:'relative',width:'400px'}}/> */}
                  <Carousel animation="slide" swipe={true} 
                   indicatorContainerProps={{ style: { width:'300px'} }}>
                    {slide.images.map((image, imageIndex) => (
                      <img
                        key={imageIndex}
                        src={image.im}
                        alt={`Image ${activeIndex + 1}`}
                        style={{ height: '180px', width: '100%',objectFit:'fill' }}
                      />
                    ))}
                  </Carousel>
{                matches &&  <hr style={{ color: 'gray', width: '0.3px', height: '250px' }} />
}                  <Stack>
                    <Typography sx={{ color: 'white', fontSize: '30px' }}>
                      {slide.description}
                    </Typography>
                    <Typography sx={{ color: 'white', fontSize: '15px' }}>
                      description
                    </Typography>
                  </Stack>
                </Stack>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}