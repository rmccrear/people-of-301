// Step 1: import React
import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


import Person from './Person';

import data from './data.json';

// let nameData = ["Brian", "Anya", "Gerard", "Andrea", "Ajamu"]

// Step 2: Create Component
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalPersonName: "Robert",
      modalImgUrl: "https://avatars.githubusercontent.com/u/113715288?v=4",
      modalIsShowing: false
    };
  }

  handleShow = () => {
    console.log("PLEASE SHOW THE MODAL!!");
    this.setState({
      modalIsShowing: true
    });
  }

  handleClose = () => {
    this.setState({
      modalIsShowing: false
    }); 
  }

  // render function
  render() {
    let peopleComponents = [];
    data.forEach((person) => {
      // arr2
      peopleComponents.push(
        <Col xs={6} md={4} lg={3}>
          <Person name={person.name} imgURL={person.imgUrl} />
        </Col>
      );
    });
    return (
      <Container>
        <h2>People:</h2>
        <Button variant="primary" 
                onClick={this.handleShow}>
          Launch modal
        </Button>
        <Modal show={this.state.modalIsShowing} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Person</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>{this.state.modalPersonName}</h2>
            <img src={this.state.modalImgUrl} />
          </Modal.Body>
        </Modal>
        <Row>
          {peopleComponents}
        </Row>
      </Container>
    );
  }
}

// Step 3: Export Component
export default Main;
