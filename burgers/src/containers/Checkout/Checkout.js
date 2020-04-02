import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients: {
            salad:1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ings = {};
        for(let param of query.entries()){
            ings[param[0]]=+param[1];
        }
        this.setState({ingredients:ings});
    }

    checkoutCancelledHander = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHander}
                    checkoutContinued={this.checkoutContinuedHandler}
                    />
                <Route path={this.props.match.url + '/contact-data'} component={ContactData}/>
            </div>
        );
    }
}

export default Checkout;