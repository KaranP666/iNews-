import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import About from './Component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  pageSize = 6;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress} />

          <Switch>
            <Route exact path="/Business">
              <News setProgress={this.setProgress} key="Business" apikey={this.apikey} pageSize={this.pageSize} country="in" category="Business" />
            </Route>
            <Route exact path="/Entertainment">
              <News setProgress={this.setProgress} key="Entertainment" apikey={this.apikey} pageSize={this.pageSize} country="in" category="Entertainment" />
            </Route>
            <Route exact path="/General">
              <News setProgress={this.setProgress} key="General" apikey={this.apikey} pageSize={this.pageSize} country="in" category="General" />
            </Route>
            <Route exact path="/Health">
              <News setProgress={this.setProgress} key="Health" apikey={this.apikey} pageSize={this.pageSize} country="in" category="Health" />
            </Route>
            <Route exact path="/Science">
              <News setProgress={this.setProgress} key="Science" apikey={this.apikey} pageSize={this.pageSize} country="in" category="Science" />
            </Route>
            <Route exact path="/Sports">
              <News setProgress={this.setProgress} key="Sports" apikey={this.apikey} pageSize={this.pageSize} country="in" category="Sports" />
            </Route>
            <Route exact path="/Technology">
              <News setProgress={this.setProgress} key="Technology" apikey={this.apikey} pageSize={this.pageSize} country="in" category="Technology" />
            </Route>
            <Route exact path="/Australia">
              <News setProgress={this.setProgress} key="Australia" apikey={this.apikey} pageSize={this.pageSize} country="au" category="General" />
            </Route>
            <Route exact path="/ARGENTINA">
              <News setProgress={this.setProgress} key="ARGENTINA" apikey={this.apikey} pageSize={this.pageSize} country="ar" category="General" />
            </Route>
            <Route exact path="/France">
              <News setProgress={this.setProgress} key="France" apikey={this.apikey} pageSize={this.pageSize} country="fr" category="General" />
            </Route>
            <Route exact path="/Mexico">
              <News setProgress={this.setProgress} key="Mexico" apikey={this.apikey} pageSize={this.pageSize} country="mx" category="General" />
            </Route>
            <Route exact path="/Taiwan">
              <News setProgress={this.setProgress} key="Taiwan" apikey={this.apikey} pageSize={this.pageSize} country="tw" category="General" />
            </Route>
            <Route exact path="/United Arab Emirates">
              <News setProgress={this.setProgress} key="United Arab Emirates" apikey={this.apikey} pageSize={this.pageSize} country="ae" category="General" />
            </Route> 
            <Route exact path="/about">
              <About setProgress={this.setProgress} />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
