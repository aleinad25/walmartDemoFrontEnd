import Buscador from './components/Buscador';
import React, { useState, useEffect } from 'react';
import ResultSearch from './components/ResultSearch';

function App() {
  const [products, setProducts] = useState([]);
  const [inputText, setInputText] = useState();

  const searchData = text => {
    console.log(text);
    setInputText(text);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const url = `http://localhost:8080/v1/product/search?param=${inputText}`;
      //setPosts(resp.data);
      console.log(url);
      await fetch(url)
        .then(response => response.json())
        .then(result => setProducts(result))
        .catch(error => {
          console.error(JSON.stringify(error));
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
