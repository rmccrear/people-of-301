// step 1 import React
import React from 'react';

// All of our components will be put in a 
// folder called components.
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

import axios from 'axios';

// import data from './data.json';

// get environment variables from .env file
// for vite:
const API_SERVER = import.meta.env.VITE_API_SERVER;
// for create-react-app:
// const API_SERVER = process.env.REACT_APP_API_SERVER;

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
      people: data,
      error: null
    });
  }

  // callback function for onClick
  // Use async so it can access the backend asynchronously.
  handleTennessee = async () => {
    // GET the data from the server
    // use API_SERVER env variable so we can easily change servers
    // when we need to (for deployment).
    let result;
    // use a try statement to handle errors
    try {
      result = await axios.get(`${API_SERVER}/search-by-home-state?homeState=Tennessee`);
    } catch (e) { // If there is an error, catch will execute.
      this.setState({
        error: e.message // The error will have a message. We can use that to inform the user.
      });
      return; // Return to stop the rest of the function from executing.
    }

    // the people is returned as an array.
    // All the return values are returned from axios 
    // in the data property of the result object.
    // The data you are looking for might be deeper in the object,
    // depending on the object structure.
    // In our case, the data of our response is simply an array of people.
    let people = result.data;
    this.setState({
      people
    });
  }
  handleLouisiana = async () => {
    // TODO: add error handling
    let result = await axios.get(`${API_SERVER}/search-by-home-state?homeState=Louisiana`);
    let people = result.data;
    this.setState({
      people
    });
  }
  handleTaiwan = async () => {
    // TODO: add error handling
    let result = await axios.get(`${API_SERVER}/search-by-home-state?homeState=Taiwan`);
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
        {
          this.state.error ?
          <Alert variant='danger'>{this.state.error}</Alert>
          : ''
        }

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