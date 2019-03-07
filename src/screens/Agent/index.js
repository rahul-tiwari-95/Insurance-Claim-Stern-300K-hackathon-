import React, { Component } from 'react';
import Confirmation from '../../components/Confirmation';
import { Button, List } from 'semantic-ui-react';
import axios from '../../axios-details'



//Fetcing Data....via get

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

    render(){
        return(
            <div>
                <h1>Agent Screen</h1>
                <Button onClick={this.fetchData}>Click Here</Button>
                <ul><h3>
                    { this.state.posts.map(person => <li>{person.firstName}</li>)}
                    { this.state.posts.map(person => <li>{person.phoneNumber}</li>)}
                    { this.state.posts.map(person => <li>{person.email}</li>)}
                    { this.state.posts.map(person => <li>{person.insuranceAgency}</li>)}
                    { this.state.posts.map(person => <li>{person.DORequest}</li>)}
                    { this.state.posts.map(person => <li>{person.age}</li>)}
                    </h3></ul>
            </div>
        )
    }
}

export default Agent;