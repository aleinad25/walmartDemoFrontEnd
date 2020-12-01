import React, { Component } from 'react';
import ProductResult from './ProductResult';

class ResultSearch extends Component {
  showProduct = () => {
    const products = this.props.products;
    if (products.length === 0) return '';
    console.log(products);
    return (
      <React.Fragment>
        <div className="col-12 p-5 row">
          {products.map(product => (
            <ProductResult key={product.id} product={product} />
          ))}
        </div>
      </React.Fragment>
    );
  };
  render() {
    return <React.Fragment>{this.showProduct()}</React.Fragment>;
  }
}
export default ResultSearch;
