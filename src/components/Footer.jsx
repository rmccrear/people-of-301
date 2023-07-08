/*
    TODO: Make a Footer component
    that has a ©️ and the names of your team.

    Then, import that Footer into the App Component
    and use it.
*/

// Step 1: import React
import React from 'react'; 


// Step 2: Create Component
class Footer extends React.Component {
  render() {
    return(
      <div>
        <hr/>
        <p>&copy; CodeX Academy</p>
      </div>
    )
  };
}


// Step 3: Export Component
export default Footer;