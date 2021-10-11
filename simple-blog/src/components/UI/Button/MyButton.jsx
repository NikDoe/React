import React from 'react';
import styles from './MyButtom.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button
            className={styles.myBtn}
            {...props}
        >
            {children}
        </button>
    );
};

export default MyButton;