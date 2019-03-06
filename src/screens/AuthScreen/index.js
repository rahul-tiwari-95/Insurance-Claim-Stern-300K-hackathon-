import React, { Component } from 'react';
import './index.css';
import styled from 'styled-components';
import { BrowserRouter as Router ,BrowserRouter,  Route, Link } from "react-router-dom";
import Client from '../Client/index'
import Agent from '../Agent/index'
import App from '../../App'


const Button = styled.button`

  color: palevioletred;
  font-size: 1em;
  margin: 3em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 30px;
`
// function HomeScreen(){
//     return (
//         <AuthScreen />
//     )
// }

class AuthScreen extends Component{
    //Handling State locally 


    render(){

        return(
            <BrowserRouter>
            <div className="AuthScreen">
                <Link to='/'><h1 style={{fontWeight:'bold'}}>
                    Miranda V1
                </h1></Link>
            <Link to='/client'> <Button onClick={()=>console.log('hey')}>User?</Button></Link>
            <Link to='/agent'><Button onClick={()=>console.log('bye')}>Agent?</Button></Link> 

            <Route path="/client"  component={Client} />
            <Route path="/agent" component={Agent} />
            <Route path="/" component={null} />
            </div>
            </BrowserRouter>
        )
    }
}

export default AuthScreen;