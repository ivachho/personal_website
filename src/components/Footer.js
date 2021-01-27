import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Footer(){
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Iva Chho
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        Made by Iva Chho
                    </Col>
                </Row>
            </Container>

        </footer>
    );
    }
export default Footer;

/* footer of page (iva chho, made by iva chho)
fluid=true : take up whole width of page 
border-top : line on top
p-3: padding of 3
d-flex justify-content-end "made by iva chho" is same amount of left as "Iva Chho" is from right 

mt-5 pushes footer down

*/