import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class UserDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form color='green' >
                <h1 className="ui centered">Enter User Details</h1>
                <Form.Field>
                    <label>First Name:  </label>
                    <input
                    placeholder='First Name'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Phone Number: </label>
                    <input
                    placeholder='Phone Number'
                    onChange={this.props.handleChange('phoneNumber')}
                    defaultValue={values.phoneNumber}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email :  </label>
                    <input
                    type='email'
                    placeholder='Email'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default UserDetails;