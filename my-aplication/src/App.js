import React,{Component} from 'react';
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Routes from "./Routes";
class App extends Component {
  render(){
    return(
      <div className=" d-flex flex-column justify-content-between">
        {Routes}
      </div>
    )
  }
}

export default App;
