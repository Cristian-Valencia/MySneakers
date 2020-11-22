import React from 'react';
import styles from './formSearch.module.css';

const FormSearch = () => {
    return(
        <form className={styles.searchContainer}>
            <div className={styles.selectContainer}>
                <label className={styles.label}>BRAND</label>
                <select className={styles.select}>
                    <option value="volvo">All</option>
                    <option value="saab">Off-White</option>
                    <option value="mercedes">Adidas</option>
                    <option value="audi">Nike</option>
                </select>
            </div>

            <div className={styles.selectContainer}>
                <label className={styles.label}>COLOR</label>
                <select className={styles.select}>
                    <option value="volvo">All</option>
                    <option value="saab">Black</option>
                    <option value="mercedes">White</option>
                    <option value="audi">Red</option>
                </select>
            </div>

            <div className={styles.selectContainer}>
                <label className={styles.label}>SIZE</label>
                <select className={styles.select}>
                    <option value="volvo">All</option>
                    <option value="saab">35-38</option>
                    <option value="mercedes">39-41</option>
                    <option value="audi">42+</option>
                </select>
            </div>

            <button className={styles.button}>Search</button>
        </form>
    )
}

export default FormSearch;