import React from 'react';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import resume from '../assets/resume.png';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title: 'LinkedIn',
                    subtitle: 'Checkout my LinkedIn',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/ivachho/',
                    selected: false

                },
                {
                    id:1,
                    title: 'Github',
                    subtitle: 'Checkout my Github',
                    imgSrc: github,
                    link: 'https://github.com/ivachho',
                    selected: false
                },
                {
                    id:2,
                    title: 'Resume',
                    subtitle: 'Checkout my Downloadable Resume',
                    imgSrc: resume,
                    link: 'https://drive.google.com/uc?export=download&id=1EajvHElfWt57BUi1Wznor604DaX0-DL2',
                    selected: false
                },
            ]

        }
    }

        handleCardClick = (id, card)=>{
            console.log(id);
            let items=[...this.state.items];

            items[id].selected=items[id].selected? false : true;

            items.forEach(item=>{
                if(item.id !==id){
                    item.selected =false;
                }
            });
            this.setState({
                items
            });
        }
        makeItems = (items)=>{
            return items.map(item=>{
                return <Card item = {item} click={(e=>this.handleCardClick(item.id, e))} key={item.id}/>
            })
        }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;

//where the cards go on top of 