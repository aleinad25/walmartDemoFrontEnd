import React, { Component } from 'react';
import ProductResult from './ProductResult';

class ResultSearch extends Component {
  showImage = () => {
    const products = this.props.products;
    if (products.length === 0) return 'No existe productos';
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
    return <React.Fragment>{this.showImage()}</React.Fragment>;
  }
}
export default ResultSearch;
