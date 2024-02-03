import React, {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import { Typography, TextField,Stack, TextareaAutosize, Button, Alert,Link } from '@mui/material';
import { Box } from '@mui/system';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';



const customTheme = createTheme({
  transitions: {
    duration: {
      enteringScreen: 1100,
      leavingScreen: 700,
    },
  },
});

export default function DrawerComp({ open, setOpen }) {
  const [fullName, setfullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setemail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <ThemeProvider theme={customTheme}>
      <Drawer
      anchor={'right'}
      sx={{
        bgcolor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
      }}  
      open={open}
      >
        <div className='overlay'></div>
        
        <div style={{backgroundColor:'black',height:'150%'}}>
          <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'end',alignItems:'end',paddingRight:'20px'
          ,paddingTop:'5px'}}>
        <Button sx={{color:'#E9CE6F',textTransform:'none'}} onClick={()=>{setOpen(false)}}>
      Get A Quote! <CancelIcon sx={{color:'#E9CE6F',height:'12px',marginLeft:'5px'}}/>
    </Button>
    </Box>
          <Stack sx={{padding:'10px'}} gap={3} >
              <Box sx={{zIndex:1 }}>
          <Typography sx={{color:"white",zIndex:1,marginBottom:'5px'}}>Full Name</Typography>
        <TextField
              value={fullName}
              onChange={(e) => { setfullName(e.target.value) }}
              sx={{borderRadius:'10px', width: '300px', bgcolor:'#707070'}}
            >           
              </TextField>
              </Box>

              <Box sx={{zIndex:1}}>
          <Typography sx={{color:"white",zIndex:1,marginBottom:'5px'}}>Phone Number</Typography>
        <TextField
              value={phone}
              onChange={(e) => { setPhone(e.target.value) }}
              sx={{borderRadius:'10px', width: '300px', bgcolor:'#707070'}}
            >           
              </TextField>
              </Box> 


              <Box sx={{zIndex:1}}>
          <Typography sx={{color:"white",zIndex:1,marginBottom:'5px'}}>Email Address</Typography>
        <TextField
              value={email}
              onChange={(e) => { setemail(e.target.value) }}
              sx={{borderRadius:'10px', width: '300px', bgcolor:'#707070'}}
            >           
              </TextField>
              </Box>

              <Box Box sx={{zIndex:1}}>
              <Typography sx={{color:"white",zIndex:1,marginBottom:'5px'}}>What do you want us to help you with?</Typography>
              <TextareaAutosize
        onChange={(e) => { setMessage(e.target.value) }}
        name="message"
        value={message}
        cols={44}
        style={{ resize: 'none', overflow: 'auto', height:'80px',borderRadius:'10px',padding:'10px',backgroundColor:'#707070' }}
        />
              </Box>

              <Box Box sx={{zIndex:1}}>
              <Button sx={{width:'300px',bgcolor:'#E9CE6F',color:'black',textTransform:'none',fontWeight:'bold','&:hover':{
                bgcolor:'#E9CE6F',color:'black'
              }}}>
                Send
              </Button>
              </Box>

              <Stack direction='row' sx={{zIndex:1,display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}} gap={2}>
              <Link href='https://www.google.com'>
        <InstagramIcon sx={{bgcolor:'black' , color:'white' , borderRadius:'30px',padding:'10px', cursor:'pointer'}}/>
        </Link>

        <Link href='https://www.google.com'>
        <FacebookIcon sx={{bgcolor:'black' , color:'white' , borderRadius:'30px',padding:'10px', cursor:'pointer'}}/>
        </Link>

        <Link href='https://www.google.com'>
        <LinkedInIcon sx={{bgcolor:'black' , color:'white' , borderRadius:'30px',padding:'10px', cursor:'pointer'}}/>
        </Link>

        <Link href='https://www.google.com'>
        <MailOutlineIcon sx={{bgcolor:'black' , color:'white' , borderRadius:'30px',padding:'10px', cursor:'pointer'}}/>
        </Link>

        <Link href='https://www.google.com'>
        <LocationOnIcon sx={{bgcolor:'black' , color:'white' , borderRadius:'30px',padding:'10px', cursor:'pointer'}}/>
        </Link>
              </Stack>
            </Stack>
        </div>
      </Drawer>
      </ThemeProvider>
  );
}