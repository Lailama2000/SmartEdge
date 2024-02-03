import { Typography, TextField, Grid, Stack, TextareaAutosize, useMediaQuery, Button, Alert } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import PhoneInput from "react-phone-input-2";
import './App.css';
import 'react-phone-input-2/lib/style.css'

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setemail] = useState('');
  const [alerting,setAlerting]= React.useState(false)
  const [message, setMessage] = useState('');
  const matches = useMediaQuery('(min-width:686px)');
  const handlesend=() =>{
    const formData = new FormData();
    if(firstName && lastName && phone && email && message){
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('phone_number', phone);
    formData.append('email', email);
    formData.append('message', message);
    // try{
    // axios.post(`${process.env.REACT_APP_API_URL}contact_form`,formData).then(
    //   res=>{
    //     if(res.data.status === true){
    //       alert('Message Send Successfully')
    //       setFirstName('')
    //       setLastName('')
    //       setPhone('')
    //       setMessage('')
    //       setemail('')
    //     }
    //   }
    // )}
    // catch(error){
    //   console.log(error)
    // }}
    }
    else{
      setAlerting(true)
    }
  }
  const lang = localStorage.getItem('lang');

  return (
    <div style={{backgroundColor:'black',marginTop:matches?'90px':'10px' }}>
        <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Looking to digitalize your business?
</Typography>
        <br />
        <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold',marginBottom:'40px' }}>Let’s work together! </Typography>
        <Stack direction={matches ? 'row' : 'column'} gap={2}>
          <Grid>
            <TextField
              label="First Name"
              value={firstName}
              onChange={(e) => { setFirstName(e.target.value) }}
              InputLabelProps={{
                sx: {
                  color: 'white'
                }
              }}
              sx={{borderRadius:'5px', width: '300px', border: '1px solid white', 
              '&:focus': { border: '1px solid white' },'.MuiInputBase-input':{color:"white"} }}
            />
          </Grid>
          <Grid>
            <TextField
              label="Last Name"
              value={lastName}
              onChange={(e) => { setLastName(e.target.value) }}
              InputLabelProps={{
                sx: {
                  color: 'white' 
                }
              }}
              sx={{borderRadius:'5px', width: '300px', border: '1px solid white', 
              '&:hover': { border: '1px solid white' },'.MuiInputBase-input':{color:"white"} }}
            />
          </Grid>
        </Stack>

        <Stack direction={matches ? 'row' : 'column'} gap={2} sx={{ marginTop: '20px' }}>
          <Grid>
          <PhoneInput
          country={'+xxx'}
          placeholder='Phome Number'
            enableSearch={true}
            value={phone}
            onChange={setPhone}
            inputStyle={{backgroundColor:'transparent', width: '300px'
            ,color:'white',fontSize:'13px',border:'1px solid white',
            borderRadius:'5px',height:'52px',marginTop:'-15px'
             }}
          />
          </Grid>
          <Grid>
            <TextField
              label='Email'
              type='email'
              value={email}
              onChange={(e) => { setemail(e.target.value) }}
              InputLabelProps={{
                sx: {
                  color: 'white' 
                }
              }}
              sx={{ borderRadius:'5px',width: '300px', 
              border: '1px solid white', '&:hover': { border: '1px solid white' } ,'.MuiInputBase-input':{color:"white"}}}
            />
          </Grid>
        </Stack>
        <Grid sx={{ marginTop: '20px' }}>
        <TextareaAutosize
        onChange={(e) => { setMessage(e.target.value) }}
        name="message"
        placeholder='Message'
        value={message}
        cols={matches ? 97 : 46}
        className="custom-textarea"
        style={{ resize: 'none', overflow: 'auto', height:'100px' }}
        />
        </Grid>
        {alerting && <Alert  severity="error" sx={{width:'300px', marginTop: '20px'}}>One of the Feilds is empty</Alert>}
        <Button onClick={handlesend} class="custom-btn btn-17">Send</Button>
    </div>
  );
}