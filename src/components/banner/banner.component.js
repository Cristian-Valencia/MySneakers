import React from 'react';
import styles from './banner.module.css';
import imgBanner from '../../images/shopping.jpg';


const Banner = () => {
    return(
        <div>
            <img src={imgBanner} className={styles.banner} alt="Banner Image" />
        </div>
    )
};

export default Banner;