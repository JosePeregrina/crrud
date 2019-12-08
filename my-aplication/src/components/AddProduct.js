import React, { Component } from "react";
import Axios from  "axios";
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      precio: 0,
      categoria: "postre",
      edit: this.props.edit? true : false,
      maxId: 0,
      dish: {

      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }
  componentDidMount(){
    if(this.state.edit){
      Axios.get(`http://localhost:4000/restaurant/${this.props.id}`)
      .then(res => this.setState({dish: res.data}))
      .then(()=> {
        this.setState({nombre: this.state.dish.nombre})
        this.setState({categoria: this.state.dish.categoria})
        this.setState({precio: this.state.dish.precio})
      })
    }
    this.getMaxId();
  }
  updateProduct(){
    const{nombre, categoria, precio} = this.state;
    const{id} = this.props;
    const playload={
      nombre,
      categoria,
      precio,
    }
    Axios.put(`http://localhost:4000/restaurant/${id}`, playload)
    .then(res => console.log({UpdateProductResponse: res}));
  }
  getMaxId(){
    Axios.get("http://localhost:4000/maxId")
    .then(id => {
      let maxId = id.data;
      console.log({PincheId: maxId});
      this.setState({maxId});
    })
    .catch(error => console.error({IdError: error}))
  }
  addProduct(){
    const {nombre, categoria, precio} = this.state;
    console.log({nombre, categoria, precio});
    let playload = {
      nombre: this.state.nombre,
      categoria: this.state.categoria,
      precio: this.state.precio,
    }
    Axios.post("http://localhost:4000/restaurant/", playload )
    .then(res => console.log({AddResponse: res}))
    .then(()=> this.setMaxId(this.state.maxId))
    .catch(error => console.error({AddError: error}));
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
    const { nombre, precio, categoria, edit, maxId, dish } = this.state;
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
            {
              edit? <button className="btn btn-primary" onClick={this.updateProduct}>Editar</button> :
              <button className="btn btn-success" onClick={this.addProduct}>Enviar</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
