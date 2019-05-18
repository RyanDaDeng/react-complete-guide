import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [personsState, setPersonsState] = useState(
        {
            persons: [
                {
                    name: 'Max', age: 28
                },
                {
                    name: 'Manu', age: 29
                }
            ],
            otherState: 'other values'
        }
    );
    const switchName = () => {
        setPersonsState({
            persons: [
                {
                    name: 'Ryan', age: 28
                }
            ]
        });
    };
    return (
        <div className="App">

            <button onClick={switchName}>Switch Name</button>

            <Person name={personsState.persons[0].name}>A</Person>

        </div>
    );

};

//
// state = {
//     persons: [
//         {
//             name: 'Max', age: 28
//         },
//         {
//             name: 'Manu', age: 29
//         }
//     ],
//     otherState: ''
// };
//
// switchName = (name) => {
//     this.setState({
//         persons: [
//             {
//                 name: 'Ryan', age: 28
//             }
//         ]
//     });
// };

export default app;
