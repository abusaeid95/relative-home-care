import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Fotter.css'

const Footer = () => {
    return (
        <div className="footer-main">
            <Container>
                <Row>
                    <Col><div className="d-flex p-1 text-white">
                        <div className="p-2 m-2">
                            <h4>Residentail Care</h4>
                            <h4> Home Care</h4>
                        </div>
                        <div className="p-2 m-2">
                            <h4>Services</h4>
                            <h4>About</h4>
                        </div>
                        <div className="p-2 m-2">
                            <h4>Career</h4>
                            <h4>Contact</h4>
                        </div>
                    </div>
                    </Col>
                    <Col><div>
                        <div className='social-icon p-3 m-'>
                            <i className="fab fa-twitter mx-3"></i>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-youtube mx-3"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-instagram mx-3"></i>
                            <button className="footer-btn">REQUEST A TOUR</button>
                        </div>

                    </div></Col>
                </Row>
            </Container>
            <hr />
        </div>

    );
};

export default Footer;