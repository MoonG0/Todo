import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Paper, TextField, Typography, Link } from "@mui/material";
import { login } from "../redux/authSlicer";
import PaperContainer from "./PaperContainer";

const RegisterForm = (props) => {
  // const isAuthenticated = useSelector((state) => state.auth.authenticated);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // dispatch ini digunakan untuk memanggil fungsi yang ada di redux action
  // const dispatch = useDispatch();
  const submitForm = () => {
    // execute redux action
    // dispatch(login({ username, password }));
  };

  return (
    <PaperContainer judul={props.judul}>
      <TextField
        onChange={(e) => setUsername(e.target.value)}
        margin="dense"
        variant="outlined"
        color="primary"
        label="Username"
        style={{ width: 400 }}
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        margin="dense"
        variant="outlined"
        color="primary"
        label="Password"
      />
      <TextField
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        margin="dense"
        variant="outlined"
        color="primary"
        label="Confirm Password"
      />
      <Typography>Already Have an Account?</Typography>
      <Link href="/login" underline="none">
        Login
      </Link>
      <Button variant="contained" color="primary" onClick={submitForm}>
        Register
      </Button>
    </PaperContainer>
  );
};

export default RegisterForm;
