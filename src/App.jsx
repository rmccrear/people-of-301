// step 1 import React
import React from 'react';

// All of our components will be put in a 
// folder called components.
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

// step2 create a component
class App extends React.Component {

  // we have a render function that returns JSX.
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}


// step3 export your component
export default App;