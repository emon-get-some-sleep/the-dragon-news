import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Header = () => {

  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small>Journalism without Fear of Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee speed={50} className="text-danger">
          I can be a React component, multiple React components, or just some
          text. I can be a React component, multiple React components, or just some
          text. I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      
    </Container>
  );
};

export default Header;
