import React from 'react';
import { Link } from 'react-router-dom';
import food from "../../../assets/joesPortfolioFood.png";
import record from "../../../assets/record-image.jpeg";
import { Container, Typography, Grow, Grid } from "@material-ui/core";
import Button from '../../Button/button';
import useStyles from "../../styles/styles";


const MainPage = () => {
    
    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch"
                    spacing={3}>  
                    <Button 
                        type={"Technical Blogs"} 
                        src={record} 
                        url={"Technical Blogs"}
                    />  
                    <Button 
                        type={"Projects"} 
                        src={record}
                        url={"Projects"} 
                    />  
                    <Button 
                        type={"Recipes"} 
                        src={food} 
                        url={"Recipes"}
                    />  
                    <Button 
                        type={"Music"} 
                        src={record}
                        url={"Music"}
                    />  
                </Grid>
            </Container>
        </Grow>
    )
}

export default MainPage