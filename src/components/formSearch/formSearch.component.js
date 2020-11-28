import React from 'react';
import styles from './formSearch.module.css';
import { useState } from 'react';
import {productsAllArray} from '../products/products.config';

const FormSearch = (props) => {

    
    const [brand,setBrand]= useState("");
    const [color,setColor]= useState("");
    const [size,setSize]= useState(0);
    const [price,setPrice]=useState(0);
    
    const details = (e) => {
        e.preventDefault();
        console.log("brand:",brand);
        console.log("color:",color);
        console.log("size:",size);

        const filteredArray = productsAllArray.filter((product) => {
            console.log("price:",price);
            console.log("productprice:",product.price);
            return brand === product.brand && color === product.color && size === product.size && product.price >= price;
        })

        props.setShoesArray(filteredArray);



    };
  



    return(
        <form className={styles.searchContainer}>
            <div className={styles.selectContainer}>
                <label className={styles.label}>BRAND</label>
                <select className={styles.select} onChange={(e) => setBrand(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Off-White">Off-White</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Nike">Nike</option>
                    <option value="Jimmy Choo">Jimmy Choo</option>
                    <option value="Chanel">Chanel</option>
                    <option value="Yves Saint Laurent">Yves Saint Laurent</option>
                    <option value="Naturino">Naturino</option>
                </select>
            </div>

            <div className={styles.selectContainer}>
                <label className={styles.label}>COLOR</label>
                <select className={styles.select} onChange={(e) => setColor(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Colored">Colored</option>
                </select>
            </div>

            <div className={styles.selectContainerSmall}>
                <label className={styles.label}>SIZE</label>
                <select className={styles.select} onChange={(e) => setSize(+e.target.value)}>
                    <option value="All">All</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                </select>
            </div>

            <div className={styles.selectContainerSmall}>
                <label className={styles.label}>PRICE</label>
                <select className={styles.select} onChange={(e) => setPrice(+e.target.value)}>
                    <option value="All">All</option>
                    <option value="50">50+</option>
                    <option value="100">100+</option>
                    <option value="200">200+</option>
                </select>
            </div>

            <button className={styles.button} onClick={details}>Search</button>
        </form>
    )
}

export default FormSearch;