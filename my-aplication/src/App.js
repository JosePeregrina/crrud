import React,{Component} from 'react';
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
