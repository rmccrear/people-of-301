// step 1 import React
import React from 'react';

// All of our components will be put in a 
// folder called components.
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

// step2 create a component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalPersonName: "Robert",
      modalPersonImgUrl: "https://avatars.githubusercontent.com/u/113715288?v=4",
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

  handleOpenPerson = (personName, personImgUrl) => {
    console.log("open person " + personName, personImgUrl);
    this.setState({
      modalIsShowing: true,
      modalPersonName: personName,
      modalPersonImgUrl: personImgUrl
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

        <Main handleOpenPerson={this.handleOpenPerson}/>
        <Footer />
      </div>
    );
  }
}


// step3 export your component
export default App;