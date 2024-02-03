import React, { useEffect, useState } from 'react'
import pic from './Media/1667px-Figma-logo.svg.png'
import { Typography } from '@mui/material'
import axios from 'axios'
import Footer from './Footer'

export default function PrivacyPolicy() {
  return (
    <div style={{backgroundColor:'black'}}>
              <div
                        style={{
                            height: 400,
                            maxWidth: '100%',
                            width: '100%',
                            backgroundColor:'#0854C1'
                        }}
                    ></div>
                   <div 
                   style={{position:'absolute',top:'60px',width:'100%',backgroundColor:'rgba(0, 0, 0,0.5)',
                   height:400}}>
                    </div>   
                    <>
                    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                    <Typography sx={{color:'white',position:'absolute',top:'200px',fontWeight:'bold',fontSize:'40px'}}>Privacy Policy</Typography>
                    </div>
                    <div style={{marginTop:'50px',display:'flex',flexWrap:'wrap',marginBottom:'30px'
                    ,justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
                      <Typography sx={{fontSize:'20px',color:'white'}}>
                        privacy policy
                      </Typography>
                    </div></>

                    <Footer />
    </div>
  )
}
