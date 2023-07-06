// import React
import React from 'react';


// create component
class Person extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>hi nice to meet you.</p>
            </div>
        );
    }
}

// export component
export default Person;