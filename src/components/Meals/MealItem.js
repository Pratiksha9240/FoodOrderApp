import classes from './MealItem.module.css';
import UserInput from '../UI/UserInput';

const MealItem = (props) => {
    return(
        <li className={classes.meals}>
            <h3>{props.meal.name}</h3>
            <div className={classes.description}>{props.meal.description}</div>
            <div className={classes.price}>${props.meal.price}</div>
            <div>
                <UserInput />
            </div>
            
        </li>
    );
}

export default MealItem;