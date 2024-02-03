import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from './Media/Group 146.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import star from './Media/Icon awesome-star-of-life.png';
import Drawer from './DrawerComp';
import {useMediaQuery } from '@mui/material';


const pages = ['About Us', 'Why Us?', 'Services' , 'Previous Projects' , 'Contact Us'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(null);
  const matches = useMediaQuery('(min-width:939px)');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (i) => {
    setAnchorElNav(null);
    const sectionElement = document.getElementById(i);
    sectionElement.scrollIntoView();
  };
  const handleClose = () => {
    setAnchorElNav(null);
  };

  const handleQuote =() =>{
    setOpen(true)
    handleClose()
    }
  
  return (
    <>
    <AppBar sx={{ backgroundColor: 'rgba(0, 0, 0,0.5)',position:'fixed',top:'0px' , backdropFilter:'blur(8px)'}}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt='...loading' style={{width:'100px'}}/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: {xs:'flex',md:'none'}, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
    <img src={logo} alt="...loading" style={{ width: '110px' }} href="/" />
  </Box>
  <IconButton
    size="large"
    aria-label="account of current user"
    aria-controls="menu-appbar"
    aria-haspopup="true"
    onClick={handleOpenNavMenu}
    color="inherit"
    sx={{
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'end',
    }}
  >
    <MenuIcon />
  </IconButton>

  <Menu
    id="menu-appbar"
    anchorEl={anchorElNav}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    open={Boolean(anchorElNav)}
    onClose={handleClose}
    sx={{
      display: { xs: 'block', md: 'none' },
      justifyContent: 'end',
    }}
  >
    <FacebookIcon sx={{ cursor: 'pointer' }} />
    <InstagramIcon sx={{ cursor: 'pointer' }} />
    <LinkedInIcon sx={{ cursor: 'pointer' }} />
    <Typography
      sx={{ color: '#FFCD26', cursor: 'pointer' }}
      onClick={handleQuote}
    >
      Get a Quote!
      <img
        src={star}
        alt="...loading"
        style={{ width: '8px', marginLeft: '5px' }}
      />
    </Typography>
    {pages.map((page) => (
      <MenuItem key={page} onClick={()=>{handleCloseNavMenu(page)}}>
        <Typography textAlign="center">{page}</Typography>
      </MenuItem>
    ))}
  </Menu>
</Box>
          <Box
  sx={{
    flexGrow: 1,
    display: { xs: 'none', md: 'flex' },
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
    <Box sx={{display:'flex', flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: matches?'15px':'5px',}}>
  {pages.map((page) => (
    <Button
      key={page}
      onClick={()=>{handleCloseNavMenu(page)}}    
        sx={{
        my: 2,
        color: 'white',
        display: 'block',
        fontSize: '10px',
        fontFamily: 'Helvetica Neue',
        position: 'relative',
        overflow: 'hidden',
        transition: '0.3s',
        '&:after': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: 0,
          height: '2px',
          backgroundColor: 'white',
          transition: '0.3s',
        },
        '&:hover:after': {
          width: '100%',
        },
      }}
    >
      {page}
    </Button>
  ))}
  </Box>
</Box>
<Box sx={{  display: { xs: 'none', md: 'flex' },
 flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',}}>
  <FacebookIcon sx={{cursor:'pointer'}}/>
<InstagramIcon sx={{cursor:'pointer'}}/>
<LinkedInIcon sx={{cursor:'pointer'}}/>
<Typography sx={{color:'#FFCD26',cursor:'pointer'}} onClick={handleQuote}>Get a Quote!
<img src={star} alt='...loading' style={{width:'8px',marginLeft:'5px'}}/>
</Typography>
</Box>
        </Toolbar>
      </Container>
    </AppBar>

    <Drawer open={open} setOpen={setOpen}/>
    </>
  );
}
export default Navbar;
