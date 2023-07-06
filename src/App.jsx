// step 1 import React
import React from 'react';
import Person from './components/Person';
import Header from './components/Header'


// step2 create a component
class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
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


// step3 export your component
export default App;