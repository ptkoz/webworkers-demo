import React from 'react';
import './App.css';

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            time: '00:00:00'
        };

        setInterval(() => {
            const date = new Date();
            const time = date.getHours().toString().padStart(2, '0')
                         + ':'
                         + date.getMinutes().toString().padStart(2, '0')
                         + ':'
                         + date.getSeconds().toString().padStart(2, '0');
            this.setState({ time });
        }, 1000)
    }

    render() {
        return (
            <div className="App">
                <h1>Current value is: {this.props.value}</h1>
                <h1>Current time is: {this.state.time}</h1>
                <div>
                    <button onClick={this.props.increment}>Increment</button>
                    <button onClick={this.props.decrement}>Decrement</button>
                </div>
            </div>
        );
    }
}

export default App;
