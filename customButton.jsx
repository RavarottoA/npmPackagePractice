import React from 'react';
import styles from './styles.module.css';

const CustomBtn = ({btnClass, label}) => {
    return(
        <button className={`${styles[btnClass]}`}>{label}</button>
    );
};

export default CustomBtn;