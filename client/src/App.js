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
    return (
      <Fragment>
        <Header title={this.state.title} subTitle={this.state.subTitle} />
            <Switch>
              <Route exact path="/" component={() => <LandingPage title={this.state.title} openingDate={this.state.openingDate} introduction={this.state.introduction}/>}/>
              <Route exact path="/series"  component={() => <SeriesPage title={this.state.title} openingDate={this.state.openingDate} introduction={this.state.introduction} userName={this.state.userName}/>}/>
              <Route exact path="/intro"  component={() => <Intro title={this.state.title} openingDate={this.state.openingDate} introduction={this.state.introduction} subscriber={this.state.subscriber}/>}/>
            </Switch>
        <Footer title={this.state.title} />
      </Fragment>
    );
  }
}

export default App;

