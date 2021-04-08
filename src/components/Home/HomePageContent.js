import { Button, Card, Container } from "react-bootstrap";
import React from "react";
import "./HomePageContent.css";
import { Link } from "react-router-dom";

const HomePageContent = (props) => {
 console.log("props",props.Data);
  return (
    <div>
        <Container>
        <div className="cardBod">
        <Card className="card_HomePage" style={{ width: "18rem" }}>
        <Card.Img className="cardImg" variant="top" src={props.Data.imageURL} alt="Image not found"/>
        <Card.Body>
          <div className="ProductInfo">
          <Card.Title>{props.Data.name}</Card.Title>
          <Card.Text>
           {props.Data.description}
          </Card.Text>
          </div>
          
          <h3 className="price_text">Price: Tk{props.Data.price}</h3>

          <Link to="/CheckOutBuyNowBtn">
          <Button className="cardButton_Home_page" variant="primary">Buy Now</Button>
          </Link>

        </Card.Body>
      </Card>
        </div>
        </Container>
    </div>
  );
};

export default HomePageContent;
