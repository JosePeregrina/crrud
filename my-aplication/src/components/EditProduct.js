import React, {Component} from 'react';
import AddProduct from './AddProduct';

class EditProduct extends Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        console.log(this.props)
        const{id}=this.props.match.params;
        return(
            <div>
                <AddProduct edit={true} id={id}/>
            </div>
        )
    }
}
export default EditProduct;