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

        if(this.state.showPersons){
            persons = (
                <div>
                    <Person
                        click={this.switchName}
                        name={this.state.persons[0].name}
                    >A</Person>

                    <Person
                        changed={this.nameChangedHandler}
                        name={this.state.persons[1].name}
                    >A</Person>
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
