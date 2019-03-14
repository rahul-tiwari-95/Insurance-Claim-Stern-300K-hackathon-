import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { throws } from 'assert';

class PersonalDetails extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
        <Form color='blue' >
            <h1 className="ui centered">Enter Personal Details</h1>
            <Form.Field>
                <label>Insurance Agency:   </label>
                <input placeholder='Insurance Agency'
                onChange={this.props.handleChange('insuranceAgency')}
                defaultValue={values.insuranceAgency}
                />
            </Form.Field>
            <Form.Field>
                <label>Description of Request:   </label>
                <input placeholder='Description of Request'
                onChange={this.props.handleChange('DORequest')}
                defaultValue={values.DORequest}
                />
            </Form.Field>
            <Form.Field>
                <label>Age:   </label>
                <input placeholder='Age'
                onChange={this.props.handleChange('age')}
                defaultValue={values.age}
                />
            </Form.Field>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        </Form>
        )
    }
}

export default PersonalDetails;