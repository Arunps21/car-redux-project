import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Dealers from "./Dealers";

function ViewCar() {
  const [car, setCar] = useState([]);

  let getData = async () => {
    let result = await fetch("/cars.json");
    result.json().then((data) => setCar(data.cars));
  };

  console.log(car);

  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    getData();
  }, []);

  const singleView = car.find((itemView) => itemView.id == params.id);
  console.log(singleView);

  return (
    <>
      {
        singleView?
        <Container>
        <h1 className="text-center mt-3">{singleView.make}</h1>
        <Row className="mt-4">
          <Col lg={6}></Col>
          <Col lg={6}>
            <ListGroup>
              <ListGroup.Item>Model: <strong>{singleView.model}</strong></ListGroup.Item>
              <ListGroup.Item>Year: <strong>{singleView.year}</strong></ListGroup.Item>
              <ListGroup.Item>Color: <strong>{singleView.color}</strong></ListGroup.Item>
              <ListGroup.Item>Features: <strong>{singleView.features}</strong></ListGroup.Item>
              <ListGroup.Item>Price: <strong>{singleView.price}</strong></ListGroup.Item>
              <ListGroup.Item>
                <Dealers shareDealer={singleView.dealer}/>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      :"No data found"
      }
    </>
  );
}

export default ViewCar;
