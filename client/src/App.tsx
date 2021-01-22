import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from './actions/favorites'
import { getBlogs } from './actions/blogs'
import NewBlogForm from './components/newBlogForm'
import logo from './logo.svg';
import './App.css';

function App(): any {
  const dispatch = useDispatch()
  
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

  console.log("invoke favs", Blogs())



  return (
    <div className="App">
      <header className="App-header">
        <NewBlogForm />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;