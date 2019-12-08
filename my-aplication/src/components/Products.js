import React, { Component } from "react";
import {Link} from 'react-router-dom'
import ProductList from "./ProductList";
import ProductMosaic from "./ProductMosaic";
import Axios from "axios";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: "list",
      dishes: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.update = this.update.bind(this);
  }
  componentDidMount() {
   this.update(); 
  }
  componentDidUpdate(prevProps, prevState) {
    console.log({ prevState: prevState.dishes, state:this.state.dishes });
    if(prevState.dishes.length !== 0){
      if(prevState.dishes.length !== this.state.dishes.length)
        console.log("%cES diferente","color:orange");
    }
  }
  update(){
    Axios.get(`http://localhost:4000/restaurant`)
      .then(res => res.data)
      .then(res => Array.from(res))
      .then(result => this.setState({ dishes: result }))
      .catch(err => console.error(err));
  }
  handleChange(event) {
    const { value: optionSelected } = event.target;
    this.setState({ optionSelected });
  }
  getContent(optionSelected, dishes) {
    if (dishes !== "") {
      switch (optionSelected) {
        case "list":
          return (
            <ul className="list-group">
              {dishes.map(dish => (
                <li className="list-group-item" key={`key${dish.id}`}>
                  <Link to={`/Edit/${dish.id}`}  >
                    <ProductList dish={dish} update={this.update} />
                  </Link>
                </li>
              ))}
            </ul>
          );
        case "mosaic":
          return (
            <div className="d-flex flex-wrap p-2">
              {dishes.map(dish => (
                <ProductMosaic dish={dish} update={this.update} />
              ))}
            </div>
          );
        default:
          console.log("Caso default");
      }
    }
  }
  render() {
    const { dishes } = this.state;
    const { optionSelected } = this.state;
    return (
      <div>
        <h4>In this component will be the product components</h4>
        <select onChange={this.handleChange.bind(this)}>
          <option value="list">List</option>
          <option value="mosaic">Mosaic</option>
        </select>
        {this.getContent(optionSelected, dishes)}
      </div>
    );
  }
}

export default Products;

/*
<ul>
              {
                  dishes.map( dish => <Product key={`${dish}`} dish={dish} />  )
              } 
              </ul>
*/
