import Buscador from './components/Buscador';
import React, { useState, useEffect } from 'react';
import ResultSearch from './components/ResultSearch';

function App() {
  const [products, setProducts] = useState([]);
  const [inputText, setInputText] = useState('');

  const searchData = text => {
    setInputText(text);
  };
  useEffect(() => {
    const fetchProducts = () => {
      const url = `https://walmart-demo-back.herokuapp.com/v1/product/search?param=${inputText}`;
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw Error(response.status);
        })
        .then(result => setProducts(result))
        .catch(error => {
          console.log('Error en consulta');
        });
    };
    fetchProducts();
  }, [inputText]);
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center"> Buscador de Productos</p>
        <Buscador searchData={searchData} />
      </div>
      <ResultSearch products={products}></ResultSearch>
    </div>
  );
}
export default App;
