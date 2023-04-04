import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Detail from "./routes/Detail";
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './blog/login'
import Action from './routes/dopdownPage/Action'
import Music from './routes/dopdownPage/Music'
import Drama from './routes/dopdownPage/Drama'
import Documentary from './routes/dopdownPage/Documentary'
import Introduction from './routes/Introduction'
import SearchHome from './routes/SearchHome' 
import SignUp from './blog/sign up' 

function App() {
  return(
     <Router>
      <Header/>
         <Switch>
         <Route path="/login">
          <Login />
        </Route>
        <Route path="/Action">
          <Action/>
        </Route>
        <Route path="/Music">
          <Music/>
        </Route>
        <Route path="/Drama">
          <Drama/>
        </Route>
        <Route path="/Documentary">
          <Documentary/>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/Introduction">
          <Introduction/>
        </Route>
         <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/">
          <SearchHome/> 
        </Route>
      </Switch> 
      <Footer/> 
    </Router> 
);
}
export default App; 

/* import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello : [],
    }
  }

  componentDidMount() {
    this._getHello();
  }

  _getHello = async() => {
    const res = await axios.get('/hello');
    this.setState({ hello : res.data.hello })
    console.log(this.state.hello);
  }

  render() {
    return(
      <>
        <h3>get DB data(브라우저 개발모드 콘솔확인)</h3>
      </>
    )
  }
}

export default App;*/
