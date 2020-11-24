import React from 'react';
import styles from './products.module.css';
import imageOne from '../../images/airForce.png';
import {productsArray} from './products.config';


const Products = (props) => { 

    return(
        <div className={styles.cardsContainer}>
            {
                props.shoesArray.map((el) =>{
                    return <div className={styles.product}>
                                <h2 className={styles.name}>{el.name}</h2>
                                <h3 className={styles.brand}>{el.brand}</h3>
                                <img src={imageOne} className={styles.image}/> 
                                <h2 className={styles.price}>{el.price}$</h2>
                                <div className={styles.details}>
                                    <h2 className={styles.color}>{el.color}</h2>
                                    <h2 className={styles.size}>{el.size}</h2>
                                </div>
                            </div>
                })
            }
            
        </div>
    )
};


export default Products;