import React from 'react';
import Person from './Person/Person'

const persons = (props) => props.persons.map((person, index) => {


    return (
        <Person
            // by adding key index, help list to determine in DOM easily, whenever this part
            // is triggered
            // can also use list element id as well
            key={person.id}
            click={()=> props.clicked(index)}
            name={person.name}
            changed={(event) => props.changed(event, person.id)}
        >A</Person>
    )
});


export default persons;