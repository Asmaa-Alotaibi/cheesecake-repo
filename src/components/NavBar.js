import React from "react";
import logo1 from "../lightlogo.png";
import logo2 from "../darklogo.png";
import { NavItem, Logo, ThemeButton, UsernameStyled } from "../styles";
import SignupButton from "./buttons/SignupButton";
import SigninButton from "./buttons/SigninButton";
import { FiLogOut } from "react-icons/fi";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <Logo to="/" className="navbar-brand">
        <img
          src={props.currentTheme === "light" ? logo1 : logo2}
          width="150"
          alt="logo"
        />
      </Logo>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto">
          <NavItem
            className="nav-item"
            to="/bakeries"
            style={{ height: 25, margin: 10, float: "right" }}
          >
            Bakeries
          </NavItem>

          <NavItem
            to="/list"
            style={{ height: 25, margin: 10, float: "right" }}
          >
            cheeseCakes
          </NavItem>
          <li className="nav-item active">
            {authStore.user ? (
              <>
                <UsernameStyled>
                  Hello, {authStore.user.username}
                </UsernameStyled>
                <FiLogOut onClick={authStore.signout} size="2em" color="red" />
              </>
            ) : (
              <>
                <SignupButton />
                <SigninButton />
              </>
            )}
            <ThemeButton onClick={props.toggleTheme}>
              {props.currentTheme === "light" ? "Dark" : "Light"} Mode
            </ThemeButton>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default observer(NavBar);
