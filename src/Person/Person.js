import React, {Component} from 'react';
import './Person.css';
// class Person extends Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.name}</p>
//                 <p>{this.props.children}</p>
//             </div>
//         );
//     }
// }

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}> I am {props.name} and I am 15 years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    );
};
export default person;