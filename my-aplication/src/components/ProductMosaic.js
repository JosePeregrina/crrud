import React, { Component } from "react";
import Axios from "axios";
const style = {
  constainer: {
    height: "150px",
    widht: "100px"
  },
  data: {
    height: "70%",
    widht: "100%"
  },
  actions: {
    height: "30%",
    widht: "100%"
  }
};
class ProductMosaic extends Component {
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
    const { id, nombre, precio, categoria } = this.props.dish;
    const { update } = this.props;
    return (
      <div className="card m-2">
        <div className="card-heard bg-secondary">
          <span>{`Categoria: ${categoria}`}</span>
        </div>
        <div className="card-body">
          <h5>{nombre}</h5>
          <p className="card-text">{`Precio unitario ${precio}`}</p>
          <div className="d-flex justify-content-around" style={style.actions}>
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

export default ProductMosaic;

/*
 <div className="d-flex flex-column border m-2 border-primary" style={style.constainer}>
        <div className="d-flex justify-content-around" style={style.data}>
          <h4>{nombre}</h4>
          <h5>{`$${precio}`}</h5>
        </div>
        
      </div>
*/
