import React, {Component} from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    state = {
        ingredients: {
            salad:1
        }
    }

    componentDidMount() {
        console.log("Parsing Query Params")
        const query = new URLSearchParams(this.props.location.search);
        const ings = {};
        for(let param of query.entries()){
            ings[param[0]]=+param[1];
        }
        this.setState({ingredients:ings});
        console.log("State updated.");
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
            </div>
        );
    }
}

export default Checkout;