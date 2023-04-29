import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Editorsinsight from "../Editorsinsight/Editorsinsight";


const News = () => {
  const news = useLoaderData();
  const { _id, title, details, image_url, category_id} = news;
  return (
    <div>
      
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}>
          <Button variant="danger">
            
            All News in this category

            <FaArrowRight className="ps-2 " />
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Editorsinsight></Editorsinsight>
    </div>
  );
};

export default News;
