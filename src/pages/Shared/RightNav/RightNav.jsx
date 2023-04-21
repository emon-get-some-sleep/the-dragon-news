import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from '../../../assets/bg.png';

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login With Github{" "}
      </Button>
      <div>
        <h4 className="mt-4">Find us on</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebookF /> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter />  Twitter</ListGroup.Item>
          <ListGroup.Item> <FaInstagram /> Instagram </ListGroup.Item>
          
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div>
        <img src={bg} alt="" />
      </div>

    </div>
  );
};

export default RightNav;
