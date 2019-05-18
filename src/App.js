import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
    state = {
        persons: [
            {
                id: '1', name: 'Max', age: 28
            },
            {
                id: '2', name: 'Manu', age: 29
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
        const persons = [...this.state.persons]; // for array
        persons.splice(index, 1);
        this.setState({persons: persons});
    };

    nameChangedHandler = (event, id) => {

        // find index with person id
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });

        //
        // for object to create a new object instead of reference
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        //
        // create a copy of array not reference and assign the modified value
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        //
        // // set state
        this.setState({
            persons: persons
        })
    };

    togglePersonHandler = () => {

        this.setState({
            showPersons: !this.state.showPersons
        })
    };


    render() {
        const style = {
            backgroundColor: 'red',
            ':hover': {
                backgroundColor: 'blue'
            }
        };

        let persons = null;
        if (this.state.showPersons) {
            style.backgroundColor = 'green';
            style[':hover'] = {
                backgroundColor: 'gray'
            };
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                // by adding key index, help list to determine in DOM easily, whenever this part
                                // is triggered
                                // can also use list element id as well
                                key={person.id}
                                click={this.deletePersonHandler.bind(this, index)}
                                name={person.name}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                            >A</Person>
                        )
                    })}
                </div>
            );
        }

        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red'); // classes will be red
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <StyleRoot>
                <div className="App">

                    <h1>This is a good demo. </h1>
                    <p className={classes.join(' ')}>This is interesting.</p>
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
            </StyleRoot>
        );
    }
}

export default Radium(App); // wrapping again, decoration
