import React from "react";
import classes from './Header.module.css';
import meals from "../../assets/meals.jpg";
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>Taste on way</h1>
                <HeaderCartButton></HeaderCartButton>
            </header>
            <div>
                <img className={classes['main-image']} src={meals}/>
            </div>
        </React.Fragment>
    );
}

export default Header;