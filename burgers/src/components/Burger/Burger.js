import React from 'react';
import {withRouter} from 'react-router-dom';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';

const burger = (props) => {
    console.log("Rendering Burger")
    console.log(props);
    let tranformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            console.log(igKey + " : "+ props.ingredients[igKey]);
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type = {igKey}/>;

            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if(tranformedIngredients.length===0){
        tranformedIngredients = <p>Please start adding ingredients!</p>
    }
    console.log(tranformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {tranformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default withRouter(burger);