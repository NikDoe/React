import React from 'react';
import styles from './Input.module.css';

const MyInput = (props) => {
    return (
        <input
            className={styles.myInput}
            {...props}
        />
    );
};

export default MyInput;