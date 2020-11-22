import logo from './logo.svg';
import styles from './App.module.css';
import Nav from './components/nav/nav.component';
import FormSearch from './components/formSearch/formSearch.component';
import Products from './components/products/products.component';

function App() {
  return (
    <div className={styles.App}>

     <Nav />

     <FormSearch />

     <Products />

    </div>
  );
}

export default App;
