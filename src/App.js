import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {
                name: 'Max', age: 28
            },
            {
                name: 'Manu', age: 29
            }
        ],
        otherState: ''
    };

    switchName = (name) => {
        this.setState({
            persons: [
                {
                    name: name, age: 28
                }
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {
                    name: 'Max', age: 28
                },
                {
                    name: event.target.value, age: 29
                }
            ]
        })
    };

    render() {
        return (
            <div className="App">

                <div>
                    <button onClick={this.switchName.bind(this, 'ryan')}>Switch Name 1</button>
                </div>
                <div>
                    <button onClick={() => this.switchName('ryan')}>Switch Name 2</button>
                </div>
                <div>
                    <Person
                        click={this.switchName}
                        name={this.state.persons[0].name}
                    >A</Person>
                </div>
                <Person
                    changed={this.nameChangedHandler}
                    name={this.state.persons[1].name}
                >A</Person>

            </div>
        );
    }
}

export default App;
