import React from 'react';
const ProductResult = props => {
  const { id, brand, description, image, price, discount } = props.product;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={`https://${image}`} alt={id} className="card-img-top"></img>
        <div className="card-body">
          <p className="card-text"> Marca : {brand}</p>
          <p className="card-text"> Descripción: {description}</p>
          <p className="card-text"> Descuento: {discount}</p>
          <p className="card-text"> precio: {price}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductResult;
