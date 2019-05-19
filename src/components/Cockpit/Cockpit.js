import React from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
    const classes = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = styles.Red;
    }

    if (props.persons.length <= 2) {
        classes.push(styles.red); // classes will be red
    }

    if (props.persons.length <= 1) {
        classes.push(styles.bold);
    }
    return (
        <div className={styles.Cockpit}>
            <div>
                REACT VERSION: {React.version}
            </div>

            <h1>This is a good demo. </h1>
            <p className={classes.join(' ')}>This is interesting.</p>
            <div>
                <button
                    className={btnClass}
                    onClick={() => props.clicked()}>Toggle Persons
                </button>
            </div>
        </div>
    );
};


export default cockpit;