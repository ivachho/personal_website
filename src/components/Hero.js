import React from 'react'; 
import { Container, Jumbotron } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props){
    return(
        <Jumbotron className="bg-transparant jumbotron-fluid p-0" >
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
            <Container fluid={true} className="hero-background"> 
                <Row className="justify-content-center py-5">
                
                    <Col md={8} sm={12}>
                    
                        { props.title && <h1 className="i-hero-title">{props.title}</h1> }
                        { props.subTitle && <h3 className="i-hero-subtitle">{props.subTitle}</h3> }
                        { props.subsubTitle && <h3 className="i-hero-subsubtitle">{props.subsubTitle}</h3> }
                    </Col>
                </Row>
            </Container>

        </Jumbotron>

    );
}

export default Hero; 