import React, { useState } from 'react';
import bg from './Media/Group.png';
import { Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import './App.css'

export default function ProjectLifeCycle() {
  const [selectedProject, setSelectedProject] = useState('first');

  const handleFigureClick = (project) => {
    setSelectedProject(project);
  };

  const renderParagraph = () => {
    switch (selectedProject) {
      case 'first':
        return (
          <Container maxWidth="md">
            <Typography
              sx={{
                padding: '50px',
                fontSize: '15px',
                color: 'white',
                position: 'relative',
                zIndex: 1,
              }}
            >
              Elevate your business with our custom mobile applications. From concept to code, we craft engaging and
              intuitive apps that resonate with your audience, providing a seamless digital experience.
            </Typography>
          </Container>
        );
      case 'second':
        return (
          <Container maxWidth="md">
            <Typography
              sx={{
                padding: '50px',
                fontSize: '15px',
                color: 'white',
                position: 'relative',
                zIndex: 1,
              }}
            >
              second
            </Typography>
          </Container>
        );
      case 'third':
        return (
          <Container maxWidth="md">
            <Typography
              sx={{
                padding: '50px',
                fontSize: '15px',
                color: 'white',
                position: 'relative',
                zIndex: 1,
              }}
            >
              third
            </Typography>
          </Container>
        );
      case 'fourth':
        return (
          <Container maxWidth="md">
            <Typography
              sx={{
                padding: '50px',
                fontSize: '15px',
                color: 'white',
                position: 'relative',
                zIndex: 1,
              }}
            >
              fourth
            </Typography>
          </Container>
        );
      case 'fifth':
        return (
          <Container maxWidth="md">
            <Typography
              sx={{
                padding: '50px',
                fontSize: '15px',
                color: 'white',
                position: 'relative',
                zIndex: 1,
              }}
            >
              fifth
            </Typography>
          </Container>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <div className="overlay"></div>
      <Box sx={{ paddingTop: '150px', paddingBottom: '100px' }}>
        <Typography
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '25px',
            fontWeight: 'bold',
            position: 'relative',
            zIndex: 1,
            padding: '20px',
          }}
        >
          Projects Life Cycle
        </Typography>

        <div id="form-wrapper">
          <form className="ff">
            <div id="debt-amount-slider">
              <label
                htmlFor="1"
                data-number="1"
                onClick={() => handleFigureClick('first')}
                className={selectedProject === 'first' ? 'active' : ''}
              ></label>
              <label
                htmlFor="2"
                data-number="2"
                onClick={() => handleFigureClick('second')}
                className={selectedProject === 'second' ? 'active' : ''}
              ></label>
              <label
                htmlFor="3"
                data-number="3"
                onClick={() => handleFigureClick('third')}
                className={selectedProject === 'third' ? 'active' : ''}
              ></label>
              <label
                htmlFor="4"
                data-number="4"
                onClick={() => handleFigureClick('fourth')}
                className={selectedProject === 'fourth' ? 'active' : ''}
              ></label>
              <label
                htmlFor="5"
                data-number="5"
                onClick={() => handleFigureClick('fifth')}
                className={selectedProject === 'fifth' ? 'active' : ''}
              ></label>
            </div>
          </form>
        </div>

        {renderParagraph()}
      </Box>
    </div>
  );
}