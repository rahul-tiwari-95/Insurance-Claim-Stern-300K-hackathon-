import React , {Component} from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router ,BrowserRouter,  Route, Link } from "react-router-dom";
import axios from '../../axios-details';

/*
Guidelines for Claim
1.Claim
2.New Client 
3.Complaint
4.Renewal
5.New Lead
6.Document 

*/

class Claims extends Component{

    render(){
        return(
            <div>
                <h2>{this.props.uniqID}</h2>
            </div>
        )
    }
}

export default Claims;