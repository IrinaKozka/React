import React from 'react'
import { Typography, Button } from '@mui/material'
import { Link } from "react-router-dom";
import LoginForm from '../LoginForm/LoginForm';



// 1. Stwórz folder i plik LoginPage, w środku komponent
// Równorzędnie wyświetlone w JSX: <> </>
// - LoginForm
// - Typography variant h6, w sx'ach: fontWeight 100, textAlign center. TextContent: Don't have an account yet? Register now!
// - Link (RRD) to /register w style: textDecoration none
// W środku Linka:
// - Button variant outlined w sx'ach: display block, mx auto. TextContent Register


const LoginPage = () => {
  return (
    <>
    <LoginForm />
      <Typography
        variant="h6"
        sx={{
          fontWeight: "100",
          my: ".8rem",
          color: "pink",
          mx: "auto",
          textAlign: "center",
        }}
      >
        Don't have an account yet? Register now!
      </Typography>
      <Link to="/register" style={{ textDecoration: "none" }}>
        <Button sx={{ display: "block", mx: "auto" }}>Register</Button>
      </Link>
    </>
  );
}

export default LoginPage