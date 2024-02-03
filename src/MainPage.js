import React from 'react'
import image from './Media/Group 324.png'
import Typography from '@mui/material/Typography';
import vid from './Media/Path 148.png'
import { Box, Button, Container, Stack,useMediaQuery } from '@mui/material';
import WhatsAppimage from './Media/WhatsApp.png';
import WhyUsCards from './WhyUsCards';
import Services from './Services';
import Footer from './Footer';
import Technologies from './Technologies';
import ProjectLifeCycle from './ProjectLifeCycle';
import Form from './Form';
import ContactInfo from './ContactInfo';
import Projects from './Projects';
import Drawer from './DrawerComp';

export default function MainPage() {
  const matches = useMediaQuery('(min-width:800px)');
  const mm = useMediaQuery('(min-width:522px)');
  const [open, setOpen] = React.useState(false);

  return (
    <>
    <img style={{position:'fixed',zIndex:1,
    top:'85%',right:matches?'50px':'10px',width:matches?'40px':'30px',cursor:'pointer'}} src={WhatsAppimage}/>
    <div style={{height:matches?'550px':'400px'}} >
    <img src={image} alt='...loading' style={{height:matches?'700px':'400px',position:'absolute'
    ,right:matches?'10px':mm?'20px':'0px',width:mm?'':'250px',objectFit:matches?'':'fill'
    ,top:'0px'}}/>
    <Typography sx={{position:'absolute',top:matches?'200px':'120px'
    ,color:'white',fontSize:matches?'30px':mm?'20px':'10px',left:matches?'80px':mm?'50px':'20px'}}>
    Elevate your online presence <br />
    with cutting-edge websites <br />
    and dynamic apps.<br /><br />
    <Button class="custom-btn btn-16" onClick={()=>{setOpen(true)}}>
      Get A Quote!
    </Button>
    </Typography>
    </div>
    <div style={{ background: 'linear-gradient(#001D46, #383737)' }} id='About Us'>
  <img src={vid} alt='...loading' style={{ height: matches?'550px':mm?'450px':'900px', width: '100%' }} />
  <Container sx={{display:'flex'
                ,flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
    <Stack direction={mm?'row':'column'} sx={{ position: 'absolute', top: matches?'750px':'470px', padding: '30px' }}>
      <Typography sx={{ color: 'white', fontSize: matches?'30px':'15px', fontWeight: 'bold' }}>
        Crafting Digital Excellence at SmartEdge!
      </Typography>
{matches &&
      <hr style={{ marginRight: '10px', height: '130px'}} />}     
       <Typography sx={{ color: 'white', fontSize: '14px' }}>
        Welcome to SmartEdge Digital Solutions, where innovation meets excellence in the dynamic world of Information
        Technology. As a startup with a passion for pushing technological boundaries, we are committed to delivering
        cutting-edge solutions that redefine the digital landscape. <br /><br />
        At our company, we believe that every challenge is an opportunity to innovate. Founded in July 2023, our journey
        is fueled by a dedicated team of tech enthusiasts who share a common vision: to empower businesses through
        transformative IT solutions. From mobile applications to sleek websites, we blend creativity with functionality
        to craft digital experiences that leave a lasting impression.
      </Typography>
    </Stack>
  </Container>
</div>
        <div style={{
          display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',backgroundColor:'#383737'}}>
        <Box sx={{bgcolor:'#242424',width:'250px',borderRadius:'40px',marginTop:'40px',padding:'10px',marginBottom:'50px'}}>
        <Typography sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',
        color:'white',fontSize:'15px',fontWeight:'bold'}}>
        Why Choose SmartEdge?
        </Typography>
        </Box>
        </div>
          <WhyUsCards />
          <Services />
          <Technologies />
          <ProjectLifeCycle />
          <Projects />

          <Stack sx={{backgroundColor:'black'}} id='Contact Us'>
        <Stack direction={matches ? 'row' : 'column'} gap={10} sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
      <Form />
      <ContactInfo />
      </Stack>
      </Stack>
            <Footer />
            <Drawer open={open} setOpen={setOpen}/>

        </>
  )
}
