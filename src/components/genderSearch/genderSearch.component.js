import React from 'react';
import styles from './genderSearch.module.css';
import {productsMenArray} from '../products/products.config';
import {productsWomenArray} from '../products/products.config';
import {productsChildrenArray} from '../products/products.config';

const GenderSearch = (props) => {
    return(
        <div className={styles.buttonContainer}>
            <button className={styles.button}>Men</button>
            <button className={styles.button}>Women</button>
            <button className={styles.button}>Children</button>
        </div>

    )
};


export default GenderSearch;