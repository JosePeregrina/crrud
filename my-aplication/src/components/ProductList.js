import React, { Component } from "react";
import Axios from "axios";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.deleteDish = this.deleteDish.bind(this);
  }

  deleteDish(id, update, event) {
    event.preventDefault();
    Axios.delete(`http://localhost:4000/restaurant/${id}`)
      .then(res => console.log(res))
      .then(() => update())
      .catch(err => console.error(err));
  }
  render() {
    const { nombre, precio, id, categoria } = this.props.dish;
    const { update } = this.props;
    return (
      <div>
        <span>{`Categoria: ${categoria}`}</span>
        <div className="d-flex flex-row justify-content-between">
          <h5>{nombre}</h5>
          <span>{`Precio: ${precio}`}</span>
          <div>
            <button className="btn btn-secondary mr-3">Modificar</button>
            <button
              className="btn btn-danger"
              onClick={this.deleteDish.bind(this, id, update)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
/*
<div className="row mb-4 mt-4">
        <div className="col-xl-12  col-lg-12">
          <div className="d-flex flex-row justify-content-between bg-light">
            <div>
              <strong className="mr-3">{nombre}</strong>
              <span>{`$${precio}`}</span>
            </div>
            <div>
              <button className="btn btn-secondary mr-3">Modificar</button>
              <button className="btn btn-danger" onClick={this.deleteDish.bind(this,id, update)}>ELIMINAR</button>
            </div>
          </div>
        </div>
      </div>
*/
