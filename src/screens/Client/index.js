import React, { Component } from 'react';
import MainForm from '../../components/MainForm';
import {Container}  from 'semantic-ui-react'

class Client extends Component{
    render(){
        return(
            <Container textAlign='center'>
                <MainForm />
            </Container>    
        )
    }
}

export default Client;