import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Link,
  Paper,
  TextField,
  Typography,
  typographyClasses,
} from "@mui/material";
import { login } from "../redux/authSlicer";
import PaperContainer from "./PaperContainer";
import { Redirect } from "react-router-dom";
const LoginForm = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.authenticated);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // dispatch ini digunakan untuk memanggil fungsi yang ada di redux action
  const dispatch = useDispatch();
  const submitForm = () => {
    // execute redux action
    dispatch(login({ username, password }));
  };

  return isAuthenticated ? (
    <Redirect to="/todo" />
  ) : (
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
      <Typography>Dont Have an Account?</Typography>
      <Link href="/register" underline="none">
        Sign Up
      </Link>
      <Button variant="contained" color="primary" onClick={submitForm}>
        Login
      </Button>
    </PaperContainer>
  );
};

export default LoginForm;
