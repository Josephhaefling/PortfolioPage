import React, {useEffect, FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from './actions/favorites'
import { getBlogs } from './actions/blogs';
import { Container, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from "./styles";
import food from "./assets/food.jpeg";
// import NewBlogForm from './components/newBlogForm'
import ReactPlayer from 'react-player';
import Header from './components/header';
import Button from './components/dumbComponents/button';
import DropDownMenu from './components/dumbComponents/DropDownMenu'
import { isJsxElement } from 'typescript';

function App(): JSX.Element {
  const dispatch = useDispatch()
  const classes = useStyles();
  
  useEffect(() => {
    dispatch(getFavorites())
    dispatch(getBlogs())
  }, [dispatch])

  const Blogs = () => {
    const blogs = useSelector((state: any) => state.blogs)
      return blogs
  }

  return (
    <Switch>
      <Route 
          path="/recipes"
          render={(): any => {
            return (
                <Container >
                  <Header />
                  <ReactPlayer class="thing" url='https://soundcloud.com/trevorjmatthews6/sets/shot-clock-ella-mai-1' />
                  <Grow in>
                    <Container>
                      <Typography className={classes.whatsUp} variant="h6" align="center">
                        Recipes
                      </Typography>
                      <Grid container justify="space-between" alignItems="stretch"
                        spacing={3}>  
                        {/* <DropDownMenu/> */}
                          {/* <Button type={"Technical Blogs"} src={food} />
                          <Button type={"Projects"} src={food} />  
                          <Button type={"Recipes"} src={food} />  
                          <Button type={"Music"} src={food} /> */}
                      </Grid>
                    </Container>
                  </Grow>
                </Container>
            )
          }}
      />
      <Route
          path="/"
          render={(): any =>  {
           return (
              <Container >
                <Header />
                <Grow in>
                  <Container>
                    <Typography className={classes.whatsUp} variant="h6" align="center">
                      Welcome! What are you interested in today?
                    </Typography>
                    <Grid container justify="space-between" alignItems="stretch"
                      spacing={3}>  
                      <Button type={"Technical Blogs"} src={food} />  
                      <Button type={"Projects"} src={food} />  
                      <Button type={"Recipes"} src={food} />  
                      <Button type={"Music"} src={food} />  
                    </Grid>
                  </Container>
                </Grow>
              </Container>
           )
          }
        }
        />
    </Switch>
  );
}

export default App;