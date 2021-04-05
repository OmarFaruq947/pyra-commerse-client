import { Button, Card, Container } from "react-bootstrap";
import React from "react";
import "./HomePageContent.css";

const HomePageContent = (props) => {
 console.log("props",props.Data);
  return (
    <div>
        <Container>
        <div className="cardBod">
        <Card className="card" style={{ width: "18rem" }}>
        <Card.Img className="cardImg" variant="top" src={props.Data.url}/>
        <Card.Body>
          <Card.Title>{props.Data.productName}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card 
          </Card.Text>
          <h3>Price: Tk{props.Data.price}</h3>
          <Button className="cardButton" variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
        </div>
        </Container>
    </div>
  );
};

export default HomePageContent;
