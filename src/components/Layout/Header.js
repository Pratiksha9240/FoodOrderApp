import React from "react";
import classes from './Header.module.css';
import meals from "../../assets/meals.jpg";
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>Taste on way</h1>
                <HeaderCartButton onCart = {props.onCart}></HeaderCartButton>
            </header>
            <div>
                <img className={classes['main-image']} src={meals} alt='meals'/>
            </div>
        </React.Fragment>
    );
}

export default Header;