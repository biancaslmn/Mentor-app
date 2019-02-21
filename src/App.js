//import React from "react";
//import SignUp from "./components/SignUp";
import React, { Component } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import CommentBox from "./components/comments";
import NavBar from './components/NavBar';
import SideBar from './components/sidebar';
import "./App.css";
import Footer from "./components/Footer";
import Chatapp from "./components/chatapp"
import JediProfile from "./components/JediProfile"
import PadawanProfile from "./components/PadawanProfile"
import PrivateRoute from "./PrivateRoute";
import googlebase from "./components/base";
import Home from "./components/Home/Home"






class App extends Component {
    state = { loading: true, authenticated: false, user: null };
    componentDidMount(){
        googlebase.auth().onAuthStateChanged(user => {
            if (user){
                this.setState({
                    authenticated: true,
                    currentUser: user,
                    loading: false
                });
            } else {  
                this.setState({
                    authenticated: false,
                    currentUser: null,
                    loading: false
                }); 
            }
        })
    }
    render(){
        const { authenticated, loading } = this.state;
        if (loading) {
            return <p> loading... </p>;
        }
        return(
            <div className="App">
            <Router>
                
                <div>
                    <PrivateRoute 
                    exact path= "/Home" 
                    component={Home}
                    authenticated={authenticated}
                    />
                    <Route path="/" component={NavBar}/>
                    <Route path="/SignUp" component={SignUp}/>
                    <Route path="/loginForm" component={Login}/>
                    <Route path="/Profile" component={PadawanProfile}/>
                    <Route path="/Mentors" component={JediProfile}/>
                    <Route path="/inqueries" component={Chatapp}/>
                    <Route path="/Feed" component={CommentBox}/>
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
//import SignUpView from './components/SignUp/SignUpView';
//import { register } from './serviceWorker';


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
