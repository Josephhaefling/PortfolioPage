import React, {useEffect, FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Grow, Grid } from "@material-ui/core";
import { isJsxElement } from 'typescript';

import useStyles from "./styles";

import { getFavorites } from './actions/favorites'
import { getBlogs } from './actions/blogs';
import food from "./assets/food.jpeg";

// import NewBlogForm from './components/newBlogForm'
import ReactPlayer from 'react-player';
import Header from './components/header';
import Button from './components/Button/button';
import MainPage from './components/Views/MainView/MainPage';
import DropDownMenu from './components/DropDown/DropDownMenu'
import RecipePage from './components/Views/RecipesView/RecipesPage';
import MusicPage from './components/Views/MusicView/MusicPage';
import BlogsPage from './components/Views/BlogView/BlogsPage';
import ProjectsPage from './components/Views/ProjectsView/ProjectsPage';

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
                  {/* <ReactPlayer 
                    class="thing" 
                    url='https://soundcloud.com/trevorjmatthews6/sets/shot-clock-ella-mai-1'
                    controls={true}
                    playing={false}
                  /> */}
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
                  {/* <ReactPlayer 
                    class="thing" 
                    url='https://soundcloud.com/trevorjmatthews6/sets/shot-clock-ella-mai-1'
                    controls={true}
                    playing={false}
                  /> */}
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
                  {/* <ReactPlayer 
                    class="thing" 
                    url='https://soundcloud.com/trevorjmatthews6/sets/shot-clock-ella-mai-1'
                    controls={true}
                    playing={false}
                  /> */}
                  <RecipePage />
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
                  {/* <ReactPlayer 
                    class="thing" 
                    url='https://soundcloud.com/trevorjmatthews6/sets/shot-clock-ella-mai-1'
                    controls={true}
                    playing={false}
                  /> */}
                  <RecipePage />
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