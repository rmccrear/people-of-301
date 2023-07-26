// step 1 import React
import React from 'react';

// All of our components will be put in a 
// folder called components.
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';

import axios from 'axios';

import data from './data.json';

{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

// step2 create a component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalPersonName: "",
      modalPersonImgUrl: "",
      modalIsShowing: false,
      // people: data
      people: []
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

  handleOpenPerson = (personName, personImgUrl) => {
    this.setState({
      modalIsShowing: true,
      modalPersonName: personName,
      modalPersonImgUrl: personImgUrl,
      people: data
    });
  }

  handleTennessee = async () => {
    let result = await axios.get(`http://localhost:3001/search-by-home-state?homeState=Tennessee`);
    let people = result.data;
    this.setState({
      people
    });
  }
  handleLouisiana = async () => {
    let result = await axios.get(`http://localhost:3001/search-by-home-state?homeState=Louisiana`);
    let people = result.data;
    this.setState({
      people
    });
  }
  handleTaiwan = async () => {
    let result = await axios.get(`http://localhost:3001/search-by-home-state?homeState=Taiwan`);
    let people = result.data;
    this.setState({
      people
    });
  }

  // we have a render function that returns JSX.
  render() {
    return (
      <div>
        <Header />

        {/* <PersonDisplayModal /> */}
        <Modal show={this.state.modalIsShowing} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Person</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>{this.state.modalPersonName}</h2>
            <img src={this.state.modalPersonImgUrl} />
          </Modal.Body>
        </Modal>

        <Main people={this.state.people} handleOpenPerson={this.handleOpenPerson}/>
        <Row className='p-3'>
          <Col>
            <Button onClick={this.handleTennessee}>
              People from Tennessee
            </Button>
          </Col>
          <Col>
            <Button onClick={this.handleLouisiana}>
              People from Louisiana
            </Button>
          </Col>
          <Col>
            <Button onClick={this.handleTaiwan}>
              People from Taiwan
            </Button>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}


// step3 export your component
export default App;