import styles from './App.module.css';
import Nav from './components/nav/nav.component';
import FormSearch from './components/formSearch/formSearch.component';
import Products from './components/products/products.component';
import GenderSearch from './components/genderSearch/genderSearch.component';
import {productsAllArray} from './components/products/products.config';
import {useState} from 'react';
import Banner from './components/banner/banner.component';

function App() {

  const [shoesArray,setShoesArray] = useState(productsAllArray);

  return (
    <div className={styles.App}>

     <Nav />

     <GenderSearch setShoesArray={setShoesArray} />

     <FormSearch setShoesArray={setShoesArray}/>

     <Banner />

     <Products shoesArray={shoesArray}/>

    </div>
  );
}

export default App;
