import React from 'react';
import { Container, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import FindSong from '../../../hooks/FindSong';
import Button from '../../Button/button';

const SongPage = (props: any) => {

    const songTitle = props.title
    const song = FindSong(songTitle)
    const { url, title, description } = song

    return (
        <Grow in>
            <Container>
                <Grid 
                    container justify="space-between" 
                    alignItems="stretch"
                    spacing={3}
                >  
                    <ReactPlayer 
                        className="thing" 
                        url={url}
                        controls={true}
                        playing={false}
                />
                </Grid>
                  <Typography className={"thing"} variant="h6" align="center">
                    {title}
                  </Typography>
                  <Typography className={"thing"} variant="body1" align="center">
                    {description.genres}
                  </Typography>
                  <Button 
                    type={"Music"} 
                    src=""
                    url={"Music"}
                  />
            </Container>
        </Grow>
    )
}

export default SongPage