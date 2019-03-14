import React, { Component } from 'react';
import Confirmation from '../../components/Confirmation';
import { Button, List } from 'semantic-ui-react';
import axios from '../../axios-details'
import { BrowserRouter as Router ,BrowserRouter,  Route, Link } from "react-router-dom";

import Claims from '../Claims/index'


/*
Styling Guidelines:
Use BootStrap to show the Shadow Card


Tasks for Agent Screen:
1. Attach Workflow to the Agent 
2. Workflow includes: Gmail , WhatsApp , Facebook
*/


class Agent extends Component{

    state = {
        posts: [],
    };

    fetchData=()=> {
        axios.get(`/details.json`)
        .then(response => {
            const data = Object.values(response.data);
            console.log(response.data)
            this.setState({ posts : data });
        })
    };

    startClaimFunction=(key)=>{
        return (

            <div>
                <form>
                <input type="checkbox" name="field1" value="Claim" /> Claim <br></br>
                <input type="checkbox" name="field2" value="New Client" /> New Client<br></br>
                <input type="checkbox" name="field3" value="Complaint"  />  Complaint<br></br>
                <input type="checkbox" name="field4" value="Renewal" /> Renewal<br></br>
                <input type="checkbox" name="field5" value="new-lead" /> New-Lead<br></br>
                <input type="checkbox" name="field6" value="document" /> Document<br></br>

                </form>
            </div>
        )
    }

    render(){
        var loadWorkflow= '7';

        return(
            <BrowserRouter>
            <div>
                <h1>Miranda Agent Dashboard</h1>
                <Button onClick={this.fetchData} style={{cursor:'pointer' , padding:'15px 20px' , fontWeight: 'bold',}}>
                Click Here
                </Button>
                <hr></hr>
                <table style={{border: '1px solid black' , width:'100%' , height:'80px' , verticalAlign:'bottom' , padding:'30px'}}>
                <tr>
                    <th>First Name</th>
                    <th>Phone Number</th>
                    <th>Email ID:</th>
                    <th>Insurance Agency</th>
                    <th>Description of Request</th>
                    <th>Age</th>
                    <th>Claim Action</th>
                </tr>
                {this.state.posts.map(function(user, i){
                        return <tr> 
                                    <td key={i}><ul><li>{user.firstName}</li></ul></td>
                                    <td key={i}>{user.phoneNumber}</td>
                                    <td key={i}>{user.email}</td>
                                    <td key={i}>{user.insuranceAgency}</td>
                                    <td key={i}>{user.DORequest}</td>
                                    <td key={i}>{user.age}</td>
                                    <td key={i} ><Button onClick={()=>alert(loadWorkflow)}  >Click to Claim</Button></td>
                                </tr> })}

                    {/* { this.state.posts.map(person => <li>{person.firstName}</li>)}
                    { this.state.posts.map(person => <li>{person.phoneNumber}</li>)}
                    { this.state.posts.map(person => <li>{person.email}</li>)}
                    { this.state.posts.map(person => <li>{person.insuranceAgency}</li>)}
                    { this.state.posts.map(person => <li>{person.DORequest}</li>)}
                    { this.state.posts.map(person => <li>{person.age}</li>)} */}


                </table>
                {this.startClaimFunction()}
            </div>
            </BrowserRouter>

        )
    }
}

export default Agent;


/*
Sample Sandbox Section 
{this.state.users.map(function(user, i){
       return <li key={i}>{user.name}</li>
     )}
*/