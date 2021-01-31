import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import useStyles from './styles/styles.js';


const Header = () => {
    const styles = useStyles()
    const { appBar, heading } = styles;
    return (
        <AppBar className ={appBar} position="static" color="inherit">
          <Typography className={heading} variant="h2" align="center">
            Mean Bean Development
          </Typography>
        </AppBar>
    )
}

export default Header