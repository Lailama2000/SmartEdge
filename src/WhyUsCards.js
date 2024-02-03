import React from 'react';
import pic1 from './Media/Group 327.png';
import pic2 from './Media/Group 330.png';
import pic3 from './Media/Group 329.png';
import pic4 from './Media/Group 328.png';
import pic5 from './Media/Path 2039.png';
import { Box, Stack } from '@mui/system';
import './App.css';

export default function WhyUsCards() {
  return (
    <div style={{ backgroundColor: '#383737' }} id='Why Us?'>
      <Stack direction='column' gap={5} sx={{padding:'50px'}}>
        <Stack direction='row' gap={5} sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
          {/* <div className='container'>
            <div className='card'>
              <div className='image'> */}
                {/* <Stack> */}
                {/* <img src={pic1} />
                <p style={{color:'#848484',fontWeight:'bold',fontSize:'15px',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>Affordable <br/>
                Excellence</p></Stack>
              </div>
              <div className='content'>
              <h5>Affordable <br/>
                Excellence</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>
            </div>
          </div> */}
{/* 
          <div className='container'>
            <div className='card'>
              <div className='image'>
              <Stack>
                <img src={pic2} />
                <p style={{color:'#848484',fontWeight:'bold',fontSize:'15px',display:'flex',
                flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>Tech-Forward <br/>
                 Design</p></Stack>
              </div>
              <div className='content'>
              <h5>Tech-Forward <br/>
                 Design</h5>    
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
              </div>
            </div>
          </div> */}

<div class = "cardd">
    <img 
    src={pic1} alt="" />
   
    <div class="card-content"> 
    <Box sx={{display:'flex',
                flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
      <h2 style={{marginLeft:'15px'}}>
      Affordable Excellence</h2>
       </Box>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
    </div>
  </div>


 <div class = "cardd">
    <img 
    src={pic3} alt="" />
   
    <div class="card-content"> 
    <Box sx={{display:'flex',
                flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
      <h2 style={{marginLeft:'15px'}}>
    Tech-Forward Design</h2>
       </Box>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
    </div>
  </div>

  <div class = "cardd">
    <img 
    src={pic2} alt="" />
   
    <div class="card-content"> 
    <Box sx={{display:'flex',
                flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
      <h2>
      Shared Success Journey</h2>
       </Box>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
    </div>
  </div>
          {/* <div className='container'>
            <div className='card'>
              <div className='image'>
              <Stack>
                <img src={pic3} />
                <p style={{color:'#848484',fontWeight:'bold',fontSize:'15px',display:'flex'
                ,flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>Shared Success <br/>
                Journey</p></Stack>
              </div>
              <div className='content'>
              <h5>Shared Success <br/>
                Journey</h5>   
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
              </div>
            </div>
          </div>
        </Stack> */}
        </Stack> 

        <Stack direction='row' gap={5} sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
          
  <div class = "cardd">
    <img 
    src={pic4} alt="" />
   
    <div class="card-content"> 
    <Box sx={{display:'flex',
                flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
      <h2>
      Agile Development Process</h2>
       </Box>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
    </div>
  </div>

  
  <div class = "cardd">
    <img 
    src={pic5} alt="" />
   
    <div class="card-content"> 
    <Box sx={{display:'flex',
                flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
      <h2>
      Passion-Infused Solutions</h2>
       </Box>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
    </div>
  </div>
          </Stack>
        {/* <Stack direction='row' gap={1} sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
          <div className='container'>
            <div className='card'>
              <div className='image'>
              <Stack>
                <img src={pic4} />
                <p style={{color:'#848484',fontWeight:'bold',fontSize:'15px',
                display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>Agile Development 
                 <br/>
                 Process</p></Stack>
              </div>
              <div className='content'>
              <h5>Agile Development 
                 <br/>
                 Process</h5> 
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='card'>
              <div className='image'>
              <Stack>
                <img src={pic5} />
                <p style={{color:'#848484',fontWeight:'bold',fontSize:'15px',display:'flex',flexWrap:'wrap'
                ,justifyContent:'center',alignItems:'center'}}>Passion-Infused 
                 <br/>
                 Solutions</p></Stack>
              </div>
              <div className='content'>
              <h5>Passion-Infused 
                 <br/>
                 Solutions</h5> 
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
              </div>
            </div>
          </div>*/}
      </Stack>
    </div>
  );
}