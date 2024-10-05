import React, { useEffect, useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Car.css'
import { useDispatch, useSelector } from "react-redux";
import { getCar } from "./actions/getCar";
function Car() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCar)
  }, []);

  const car = useSelector(state=>state.reducerCar)
  console.log(car);
  
  return (
    <>
      <h1 className="mt-3" style={{ textAlign: "center" }}>
        Car Details
      </h1>
      <Row className="ms-5">
        {car.map((carList) => (
          <Col className="p-2" lg={4} md={6} id="c1">
            <Link style={{textDecoration:'none'}} to={`/ViewCar/${carList.id}`}>
              <Card className="mt-5 ms-5" style={{ width: "18rem"}}>
                <Card.Img variant="top" src={carList.image} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    {carList.make}
                  </Card.Title>
                  <Card.Text
                    className="mt-3"
                    style={{ textAlign: "center" }}
                  >{`Model: ${carList.model}`}</Card.Text>
                  <Card.Text
                    style={{ textAlign: "center" }}
                  >{`Year: ${carList.year}`}</Card.Text>
                  <Card.Text
                    style={{ textAlign: "center" }}
                  >{`Price: ${carList.price}`}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Car;
