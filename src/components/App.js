import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import NewsPage from './NewsPage';
import ProfilePage from './ProfilePage';
import Header from './Header';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route exact path='/' component={HomePage} />
          <Route path='/news' component={NewsPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/login' component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
