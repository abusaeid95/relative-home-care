
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
  const { name, description, img,id } = service;
  return (
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description.slice(0, 120)}
            </Card.Text>
            <div className="text-center">
            <Link to={`/service/${id}`}><Button variant="primary">Details</Button></Link>
            </div>
          </Card.Body>
        </Card>
      </Col>



    // <div className="col">
    //   {/* <div className="card h-100 main-card">
    //     <img className="card-img" src={img} alt="" />
    //     <div className="card-body">
    //       <h3>{name}</h3>
    //       <p>{description}</p>
    //     </div>
    //   </div> */}
    // </div>
  );
};

export default Service;