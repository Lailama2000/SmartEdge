import React, { useState } from 'react';
import { Box, Container, Stack } from '@mui/system';
import { Typography } from '@mui/material';
import pic1 from './Media/server.jpg.png';
import pic2 from './Media/email.jpg.png';
import pic3 from './Media/digital.jpg.png';
import pic4 from './Media/website.jpg.png';
import pic5 from './Media/phone.jpg.png';

export default function Services() {
  const [selectedService, setSelectedService] = useState('server');

  const handleFigureClick = (service) => {
    setSelectedService(service);
  };

  const renderParagraph = () => {
    switch (selectedService) {
      case 'server':
        return (
          <Container maxWidth='md'>
          <Typography sx={{padding:'50px',fontSize:'15px'}}>
Elevate your business with our custom mobile applications. 
From concept to code, we craft engaging and intuitive apps that resonate with your audience, providing a seamless digital experience.       
 </Typography>
 </Container>
        );
      case 'email':
        return (
          <Container maxWidth='md'>
          <Typography sx={{padding:'50px',fontSize:'15px'}}>
          second
 </Typography>
 </Container>
        );
      case 'digital':
        return (
          <Container maxWidth='md'>
          <Typography sx={{padding:'50px',fontSize:'15px'}}>
          third
 </Typography>
 </Container>
        );
      case 'websites':
        return (
          <Container maxWidth='md'>
          <Typography sx={{padding:'50px',fontSize:'15px'}}>
            fourth
 </Typography>
 </Container>
        );
      case 'mobile':
        return (
          <Container maxWidth='md'>
          <Typography sx={{padding:'50px',fontSize:'15px'}}>
            fifth
 </Typography>
 </Container>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: '#E6E6E6' }}>
      <Stack
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            bgcolor: '#242424',
            width: '250px',
            borderRadius: '40px',
            marginTop: '40px',
            padding: '10px',
            marginBottom: '50px',
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
            Our Services
          </Typography>
        </Box>
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Stack
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '30px',
            }}
            gap={2}
            onClick={() => handleFigureClick('server')}
          >
            <figure>
              <img src={pic1} style={{ objectFit: 'fill', width: '200px' }} />
            </figure>
            <Typography sx={{ fontWeight: 'bold', color: '#3E3E3E' }}>
              Server Management
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '30px',
            }}
            gap={2}
            onClick={() => handleFigureClick('email')}
          >
            <figure>
              <img src={pic2} style={{ objectFit: 'fill', width: '200px' }} />
            </figure>
            <Typography sx={{ fontWeight: 'bold', color: '#3E3E3E' }}>
              Email Hosting
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '30px',
            }}
            gap={2}
            onClick={() => handleFigureClick('digital')}
          >
            <figure>
              <img src={pic3} style={{ objectFit: 'fill', width: '200px' }} />
            </figure>
            <Typography sx={{ fontWeight: 'bold', color: '#3E3E3E' }}>
              Digital Marketing
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '30px',
            }}
            gap={2}
            onClick={() => handleFigureClick('websites')}
          >
            <figure>
              <img src={pic4} style={{ objectFit: 'fill', width: '200px' }} />
            </figure>
            <Typography sx={{ fontWeight: 'bold', color: '#3E3E3E' }}>
              Websites Development
            </Typography>
          </Stack>
          <Stack
           sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '30px',
            }}
            gap={2}
            onClick={() => handleFigureClick('mobile')}
          >
            <figure>
              <img src={pic5} style={{ objectFit: 'fill', width: '200px' }} />
            </figure>
            <Typography sx={{ fontWeight: 'bold', color: '#3E3E3E' }}>
              Mobile Development
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      {renderParagraph()}
    </div>
  );
}