import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import PostCreationPage from './pages/posts/PostCreationPage';
import HomePage from './pages/HomePage';
import NavBarComponent from './components/NavBarComponent';
import PostsPage from './pages/posts/PostsPage';
import RegisterPage from './pages/user/RegisterPage';
import LoginPage from './pages/user/LoginPage';
import {StorageContext} from './contexts/StorageContext';
import PrivateRoute from './components/PrivateRoute';
import PostDetailPage from './pages/posts/PostDetailPage';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userData, setUserData] = useState(null)
  const [postsData, setPostsData] = useState(null)
  const [categoriesData, setCategoriesData] = useState(null)

  return (
    <div className="container">
      <StorageContext.Provider value={{isAuthenticated, setIsAuthenticated, userData, setUserData, postsData, setPostsData, categoriesData, setCategoriesData}}>
        <Router>
          <NavBarComponent />
          <Switch>
          <PrivateRoute path="/landing" component={HomePage} />
          <PrivateRoute path="/new-post" component={PostCreationPage} />
          <PrivateRoute path="/posts/:id" component={PostDetailPage} />
          <PrivateRoute path="/posts" component={PostsPage} />
          <Route path="/user/register" component={RegisterPage} />
          <Route path="/user/login" component={LoginPage} />
          </Switch>
        </Router>
      </StorageContext.Provider>
    </div>
  );
}

export default App;
