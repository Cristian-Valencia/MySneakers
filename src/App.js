import logo from './logo.svg';
import styles from './App.module.css';
import Nav from './components/nav/nav.component';
import FormSearch from './components/formSearch/formSearch.component';
import Products from './components/products/products.component';
import {productsArray} from './components/products/products.config';
import {useState} from 'react';

function App() {

  const [shoesArray,setShoesArray] = useState(productsArray);

  return (
    <div className={styles.App}>

     <Nav />

     <FormSearch setShoesArray={setShoesArray}/>

     <Products shoesArray={shoesArray}/>

    </div>
  );
}

export default App;
