import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';
import axios from '../axios-details'

class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    sendToFirebaseFunction = () =>{
        const details = {
        firstName: this.props.values.firstName,
        phoneNumber: this.props.values.phoneNumber,
        email: this.props.values.email,
        insuranceAgency: this.props.values.insuranceAgency,
        DORequest: this.props.values.DORequest,
        age: this.props.values.age,
        time: new Date(),
        }
        axios.post('/details.json',details)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    render(){
        const {values: { firstName, lastName, email, insuranceAgency, DORequest, age }} = this.props;
        
        
        return(
            <div>
                <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <List>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>First Name: {firstName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Last Name: {lastName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                            <a href='mailto:jack@semantic-ui.com'>{email}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='calendar' />
                        <List.Content>{insuranceAgency} Years</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>{DORequest}, {age}</List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Confirm</Button>
                <Button onClick={this.sendToFirebaseFunction}>Save Data</Button>
            </div>
        )
    }
}

export default Confirmation;