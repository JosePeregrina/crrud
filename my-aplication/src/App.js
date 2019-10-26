import React,{Component} from 'react';
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Products from "./components/Products";
import { Switch, Route } from "react-router-dom";
const styles={
  container:{
    height: "85vh",
  }
}
class App extends Component {
  state={
    dishes: [],
  }
  componentDidMount(){
    fetch(`http://localhost:4000/restaurant`)
    .then(result => result.json())
    .then( result => this.setState({ dishes: result }));
  }
  render(){
    const { dishes } = this.state;
    return(
      <div className=" d-flex flex-column justify-content-between">
        <Header/>
        <div className="container-fluid" style={styles.container}>
          <Switch>
            <Route path="/" exact render={ () => <Products dishes={dishes} /> } />
          </Switch>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
