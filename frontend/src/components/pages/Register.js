import { Container, Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";

const Register = () => {
    const { Register } = useRegister()
    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value);
        setUser({ ...user, [name]: value });
    }

    const onClickRegister = () => {
        Register(user)
    };

  return (
    <>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">
            ユーザ登録画面
          </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="username"
              label="ID"
              id="username"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              fullWidth
              color="error"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onClickRegister}
            >
              登録
            </Button>
            <Link to="/login" >登録済みの方はこちら</Link>
        </Box>
        
      </Container>
    </>
  );
};

export default Register;

