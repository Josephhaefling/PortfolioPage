import React, {useEffect, FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Grow, Grid } from "@material-ui/core";
import { isJsxElement } from 'typescript';

import useStyles from "./styles";

import { getFavorites } from './actions/favorites'
import { getBlogs } from './actions/blogs';
import food from "./assets/joesPortfolioFood.png";

// import NewBlogForm from './components/newBlogForm'
import Header from './components/header';
import Button from './components/Button/button';
import MainPage from './components/Views/MainView/MainPage';
import DropDownMenu from './components/DropDown/DropDownMenu'
import RecipePage from './components/Views/RecipesView/RecipesPage';
import MusicPage from './components/Views/MusicView/MusicPage';
import BlogsPage from './components/Views/BlogView/BlogsPage';
import ProjectsPage from './components/Views/ProjectsView/ProjectsPage';
import SongPage from './components/Views/SongView/SongPage';

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
                  <RecipePage />
                </Container>
            )
          }}
      />
      <Route 
          path="/projects"
          render={(): any => {
            return (
                <Container >
                  <Header />
                  <RecipePage />
                </Container>
            )
          }}
      />
      <Route 
          path="/technical blogs"
          render={(): any => {
            return (
                <Container >
                  <Header />
                  
                  <BlogsPage />
                </Container>
            )
          }}
      />
      <Route 
          path="/music"
          render={(): any => {
            return (
                <Container >
                  <Header />
                  <MusicPage />
                  <RecipePage />
                </Container>
            )
          }}
      />
      <Route 
          exact path="/:title"
          render={(routeProps): any => {
            const { title } = routeProps.match.params
            return (
                <Container >
                  <Header />
                  <SongPage title={ title } />
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
                <MainPage />
              </Container>
           )
          }
        }
        />
    </Switch>
  );
}

export default App;