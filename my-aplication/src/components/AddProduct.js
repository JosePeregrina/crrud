import React, { Component } from "react";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      precio: 0,
      categoria: "postre"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, type } = event.target;
    if (type === "radio") this.setState({ categoria: name });
    else if (name === "nombre") {
      const letters = new RegExp(/^([a-z]||[á,é,í,ó,ú]){0,30}$/i);
      if (letters.test(value)) {
        this.setState({ [name]: value });
      }
    } else this.setState({ [name]: value });
  }
  render() {
    const { nombre, precio, categoria } = this.state;
    return (
      <div className="row">
        <div className="col-xl-8 col-md-8 col-sm-8 col-xs-8 mx-auto mt-4">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={nombre}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="precio">Precio</label>
            <input
              type="number"
              name="precio"
              value={precio}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <h5>Categoria</h5>
            <div className="form-check ml-3">
              <label htmlFor="postre" className="form-check-label">
                <input
                  type="radio"
                  name="postre"
                  className="form-check-input"
                  checked={categoria === "postre" ? true : false}
                  onChange={this.handleChange}
                />
                Postre
              </label>
            </div>
            <div className="form-check ml-3">
              <label htmlFor="bebida" className="form-check-label">
                <input
                  type="radio"
                  name="bebida"
                  className="form-check-input"
                  checked={categoria === "bebida" ? true : false}
                  onChange={this.handleChange}
                />
                Bebida
              </label>
            </div>
            <div className="form-check ml-3">
              <label htmlFor="comida" className="form-check-label">
                <input
                  type="radio"
                  name="comida"
                  className="form-check-input"
                  checked={categoria === "comida" ? true : false}
                  onChange={this.handleChange}
                />
                Comida
              </label>
            </div>
            <div className="form-check ml-3">
              <label htmlFor="entrada" className="form-check-label">
                <input
                  type="radio"
                  name="entrada"
                  className="form-check-input"
                  checked={categoria === "entrada" ? true : false}
                  onChange={this.handleChange}
                />
                Entrada
              </label>
            </div>
            <button>Enviar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
