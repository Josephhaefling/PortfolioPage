import React from 'react';
import { Link } from 'react-router-dom';
import food from "../../../assets/food.jpeg";
import { Container, Typography, Grow, Grid } from "@material-ui/core";
import Button from '../../Button/button';

const MainPage = () => {

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch"
                    spacing={3}>  
                    <Button type={"Technical Blogs"} src={food} />  
                    <Button type={"Projects"} src={food} />  
                    <Button type={"Recipes"} src={food} />  
                    <Button type={"Music"} src={food} />  
                </Grid>
            </Container>
        </Grow>
    )
}

export default MainPage