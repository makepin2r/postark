import React, { Fragment, Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import LandingPage from './Components/Views/LandingPage'
import SeriesPage from './Components/Views/SeriesPage/SeriesPage'
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'

class App extends Component {
  state = {
    title : 'Tomorrow to Now',
    subTitle: '시간을 거꾸로 걷기',
    openingDate: '2020.09.04'
  }
  render() {
    return (
      <Fragment>
        <Header title={this.state.title} subTitle={this.state.subTitle} />
        <Router>
            <Switch>
              <Route exact path="/" component={() => <LandingPage title={this.state.title} openingDate={this.state.openingDate}/>}/>
              <Route exact path="/series"  component={() => <SeriesPage title={this.state.title} openingDate={this.state.openingDate}/>}/>
            </Switch>
        </Router>
        <Footer title={this.state.title} />
      </Fragment>
    );
  }
}

export default App;

