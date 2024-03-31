import React, { useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import BasicMenu from "../elements/BasicMenu";
import { LoginUserContext } from "../providers/LoginUserProvider";

const Header = (props) => {
    const { loginUser } = useContext(LoginUserContext);
  return (
    <AppBar position="static">
        <Toolbar>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <BasicMenu/>
                </Grid>
                <Grid item xs={6} sx={{ py:0 }}>
                    {props.name}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Username:{loginUser}
                    </Typography>
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
