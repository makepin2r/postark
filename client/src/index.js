import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch,
} from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './reset.css'
import './App.css'
import './Components/Header/Header.css'
import './Components/Footer/Footer.css'
import './Components/Views/Main.css'
import './Components/Views/PostBox.css'
import './Components/Views/Intro/Intro.css'
import './Components/Views/SeriesPage/SeriesPage.css'
import './Components/Views/Post/Post.css'
// import './Components/Views/LandingPage.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
   document.getElementById('root')
);
