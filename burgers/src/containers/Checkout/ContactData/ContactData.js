import React, { Component } from "react";

import Button from '../../../components/UI/Button/Button'

import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render () {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact Data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
                    <input className={classes.Input} type="text" name="email" placeholder="Your email"/>
                    <input className={classes.Input} type="text" name="street" placeholder="Your address"/>
                    <input className={classes.Input} type="text" name="postalCode" placeholder="Your zip code"/>
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;