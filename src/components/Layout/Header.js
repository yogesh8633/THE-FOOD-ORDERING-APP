import React from "react";
import mealsImage from "../../assests/meals.jpg";
import classes from "../Layout/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of Food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
