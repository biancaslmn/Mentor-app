//import React from "react";
import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Comments from "./components/comments";
import NavBar from './components/NavBar';
import SideBar from './components/sidebar';
import "./App.css";
import Footer from "./components/Footer";
import Chatapp from "./components/chatapp"
import JediProfile from "./components/JediProfile"
import PadawanProfile from "./components/PadawanProfile"





class App extends Component {
    render(){
        return(
            <div className="App">
            <Router>
                
                <div>
                    <Route path="/" component={NavBar}/>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/Profile" component={JediProfile}/>
                    <Route path="/Mentors" component={PadawanProfile}/>
                    <Route path="/inqueries" component={Chatapp}/>
                </div>
            </Router>
          
            <Footer></Footer>
            </div>
        )
    }
}
export default App;


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//import { StyleSheet } from 'react-native';
//import Form from '../../../MIACOR201807FSF3/19-react/01-Activities/17-Ins_FormsDemo/src/components/Form/Form';
//import Footer from '../../../MIACOR201807FSF3/20-react/01-Activities/06-Stu_PupsterApp/Solved/src/components/Footer/Footer';
//import JediProfile from './components/JediProfile';
//import PadawanProfile from './components/PadawanProfile';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
