import React, { FC, useEffect } from 'react';
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from './actions/favorites'
import { getBlogs } from './actions/blogs';
import { Container, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from "./styles";
import food from "./assets/food.jpeg";
// import NewBlogForm from './components/newBlogForm'
import Header from './components/header';
import Button from './components/dumbComponents/button';
import DropDownMenu from './components/dumbComponents/DropDownMenu'
import { isJsxElement } from 'typescript';

function App(): any {
  const dispatch = useDispatch()
  const classes = useStyles();
  
  useEffect(() => {
    dispatch(getFavorites())
    dispatch(getBlogs())
  }, [dispatch])

  const Blogs = () => {
    const blogs = useSelector((state: any) => {
        return state.blogs
      })
      return blogs
  }

  return (
    <Switch>
      <Route 
          path="/recipes"
          render={() => {
            return (
              <div>
                <Container >
                  <Header />
                  <Grow in>
                    <Container>
                      <Typography className={classes.whatsUp} variant="h6" align="center">
                        Recipes
                      </Typography>
                      <Grid container justify="space-between" alignItems="stretch"
                        spacing={3}>  
                        <DropDownMenu/>
                      {/* <Button type={"Technical Blogs"} src={food} />  
                      <Button type={"Projects"} src={food} />  
                      <Button type={"Recipes"} src={food} />  
                      <Button type={"Music"} src={food} />   */}
                      </Grid>
                    </Container>
                  </Grow>
                </Container>
              </div>
            )
          }}
        >
        </Route>
      <Route
          path="/"
          render={() => {
           return (
            <div>
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
            </div>
           )
          }
        }
        />
    </Switch>
  );
}

export default App;