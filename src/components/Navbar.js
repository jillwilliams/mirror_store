import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from "./logo.svg";
import styled from "styled-components";
import{ ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/2744984/communication_device_mobile_phone_service_viber_voip_icon
        Creative Commons (Attribute 3.0 Unported);
        https://www.iconfinder.com/ */}
        <Link to="/">
          {/* <img source={logo} alt="phone" className="navbar-brand" />  */}
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              PRODUCTS
            </Link>
          </li>
        </ul>
        <Link to='/cart' className="ml-auto">
          <ButtonContainer>
            <span>
              <i className="fas fa-cart-plus" />
            </span>
              MY CART
          </ButtonContainer>
      </Link>
    </NavWrapper>  
  }
}
// const ButtonContainer = styled.button`
// text-transform:uppercase;
// `
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
  color: var(--mainWhite) !important;
  font-size: 1.3rem;
  // Pixelds are absolute and rem are focusing on the root element, and when a user changed the pixels because it will be responsive, rather than assign absolute sizes with pixels. Recall: 1rem = 16px Bootstrap also needs rem values
  text-transform: capitalize;
}
`;
