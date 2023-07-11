// Step 1: import React
import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Person from './Person';

import data from './data.json';

// let nameData = ["Brian", "Anya", "Gerard", "Andrea", "Ajamu"]

// Step 2: Create Component
class Main extends React.Component {


  // render function
  render() {
    let peopleComponents = [];
    data.forEach((person)=>{
        // arr2
        peopleComponents.push(
            <Col xs={6} md={4} lg={3}>
                <Person name={person.name} imgURL={person.imgUrl}/>
            </Col>
        );
    });
    return (
      <Container>
        <h2>People:</h2>
        <Row>
            { peopleComponents }
        </Row>
      </Container>
    );
  }
}

// Step 3: Export Component
export default Main;
