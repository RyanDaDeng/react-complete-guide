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
        otherState: '',
        showPersons: false
    };

    switchName = (name) => {
        this.setState({
            persons: [
                {
                    name: name, age: 28
                },
                {
                    name: 'Manu', age: 29
                }
            ]
        });
    };

    deletePersonHandler = (index) => {
        // This has flaw
        // without slice, it creates a reference
        //const persons = this.state.persons.slice();

        // re-populate the values to a new array, not reference
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
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

    togglePersonHandler = () => {

        this.setState({
            showPersons: !this.state.showPersons
        })
    };


    render() {
        const style = {
            backgroundColor: 'red'
        };

        let persons = null;

        for (let person in this.state.persons) {

        }
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={this.deletePersonHandler.bind(this, index)}
                                name={person.name}
                            >A</Person>
                        )
                    })}
                </div>
            );
        }

        return (
            <div className="App">

                <div>
                    <button onClick={this.switchName.bind(this, 'ryan')}>Switch Name 1</button>
                </div>
                <div>
                    <button
                        style={style}
                        onClick={this.togglePersonHandler}>Toggle Persons
                    </button>
                </div>

                {persons}
            </div>
        );
    }
}

export default App;
