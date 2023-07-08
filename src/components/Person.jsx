// import React
import React from 'react';
import "./Person.css";

// create component
class Person extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            greetedCount: 0
        };
    }

    handleSayHi = () => {
        console.log("say hi to "  + this.props.name);
        // this.state.greetedCount++; // This doesn't work!!!
        // This is how we update state in React
        // So that the page updates on each setState invocation.
        this.setState({
            greetedCount: this.state.greetedCount + 1
        });
    };

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p onClick={this.handleSayHi}>Say hi!</p>
                <p>Has been greeted: {this.state.greetedCount} times.</p>
                <img src={this.props.imgURL} />
                <p>hi nice to meet you.</p>
            </div>
        );
    }
}

// export component
export default Person;