import React, { Fragment, Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import LandingPage from './Components/Views/LandingPage'
import SeriesPage from './Components/Views/SeriesPage/SeriesPage'
import Intro from './Components/Views/Intro/Intro'
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'
import Post from './Components/Views/Post/Post'

class App extends Component {
    state = {
        userId: '0',
        userName: '안녕로봇',
        title : 'Tomorrow to Now',
        subTitle: '시간을 거꾸로 걷기',
        openingDate: '2020.09.04',
        introduction: '안녕하세요~!',
        subscriber: 10,
      }

  render() {
    const { userId, userName, title, subTitle,openingDate,introduction, subscriber   } = this.state;
    return (
      <Fragment>
            <Switch>
              <Route exact path="/" component={() => <LandingPage title={title} subTitle={subTitle} openingDate={openingDate} introduction={introduction}/>}/>
              <Route exact path="/series"  component={() => <SeriesPage title={title}  subTitle={subTitle} openingDate={openingDate} introduction={introduction} userName={userName}/>}/>
              <Route exact path="/intro"  component={() => <Intro title={title} subTitle={subTitle} openingDate={openingDate} introduction={introduction} subscriber={subscriber}/>}>
              </Route>
              <Route exact path="/post/:id" component={() => <Post title={title}  />}/>
            </Switch>

      </Fragment>
    );
  }
}

export default App;

