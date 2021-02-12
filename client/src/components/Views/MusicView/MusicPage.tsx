import React from 'react';
import { Container, Typography, Grow, Grid } from "@material-ui/core";

import useStyles from "../../styles/styles";



const MusicPage = () => {

      const classes = useStyles();


    return (
        <Grow in>
            <Container>
            <Typography className={classes.whatsUp} variant="h6" align="center">
                Music
            </Typography>
            <Grid container justify="space-between" alignItems="stretch"
                spacing={3}>  
                {/* <DropDownMenu/> */}
                </Grid>
            </Container>
        </Grow>
    )
}