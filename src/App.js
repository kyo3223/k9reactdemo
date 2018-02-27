import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Button } from 'antd-mobile';
// import DatePicker from 'antd-mobile/lib/date-picker';  // 加载 JS
// import 'antd-mobile/lib/date-picker/style/css';   
import 'antd-mobile/dist/antd-mobile.css';
// import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
// import { TabBar } from 'antd-mobile/lib/tab-bar';
import { TabBar } from 'antd-mobile';
// ReactDOM.render(<ButtonExample />, mountNode);
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Reservation from './components/reservation/reservation'


import My from './components/my/my'
import Main from './components/main/main'


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
const Topics = () => (
  <div>
    <h2>Topics</h2>
  </div>
);
class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <Router>
        <div>

          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/topics" component={Topics} />
          <Route exact path="/my" component={My} />
          <Route exact path="/reservation" component={Reservation} />
          
        </div>
      </Router>
      
    );
  }
}

export default App;