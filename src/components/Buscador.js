import React, { Component } from 'react';
class Buscador extends Component {
  busquedaRef = React.createRef();
  getProducts = e => {
    e.preventDefault();
    //tomamos el valor del imput y lo enviamos al componente principal
    const textInput = this.busquedaRef.current.value;
    this.props.searchData(textInput);
  };
  render() {
    return (
      <form onSubmit={this.getProducts}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.busquedaRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca un producto. Ejemplo: weñxoab"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="form-control form-control-lg"
              value="Buscar"
            />
          </div>
        </div>
      </form>
    );
  }
}
export default Buscador;
