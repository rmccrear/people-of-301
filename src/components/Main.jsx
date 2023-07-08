// Step 1: import React
import React from 'react';
import Person from './Person';


// Step 2: Create Component
class Main extends React.Component {

  // render function
  render() {
    return (
      <div>
        <h2>People:</h2>
        <Person name="Brian"/>
        <Person name="Anya"/>
        <Person name="Gerard"/>
        <Person name="Bianca"/>
        <Person name="Andrea"/>
        <Person name="Ajamu"/>
        <Person name="Justin"/>
        <Person name="Justine"/>
        <Person name="Seth"/>
        <Person name="Robert"/>
      </div>
    );
  }
}

// Step 3: Export Component
export default Main;
