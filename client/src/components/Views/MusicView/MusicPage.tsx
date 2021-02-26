import React from 'react';
import { Container, Typography, Grow, Grid } from "@material-ui/core";
import CreateSongLinks from '../../../hooks/CreateSongLinks';


import useStyles from "../../styles/styles";

const MusicPage = () => {

    const classes = useStyles();
    const songLinks = CreateSongLinks();

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch"
                spacing={3}>  
                    { songLinks }
                </Grid>
            </Container>
        </Grow>
    )
}

export default MusicPage