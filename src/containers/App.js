import React, {Component} from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockipit from '../components/Cockpit/Cockpit'

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

    togglePersonHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
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


    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                ></Persons>
            );
        }


        return (
            <div className={styles.App}>
                <Cockipit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;
