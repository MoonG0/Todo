import React, { useState } from 'react'
import {Paper, TextField, Typography} from '@mui/material'



const LoginForm = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
   <Paper style={{width:600, height:700, padding:30}}>
      <Typography variant="h5" style={{marginBottom:40}} color="primary">{username}</Typography>
      <TextField onChange={(e)=>setUsername(e.target.value)} margin="dense" variant="outlined" color="primary" label="Username" style={{width:400}}/>
      <TextField onChange={(e)=>setPassword(e.target.value)} type="password"  margin="dense" variant="outlined" color="primary" label="Password"/>
      
    </Paper>
  )
}

export default LoginForm
