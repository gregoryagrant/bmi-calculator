import React, { Component } from "react";
import "./NumericInput.css";


export default class NumericInput extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            currentValue:0
        }
    }
    onChangeNumber(e){
        this.setState({currentValue:e.target.value})
        console.log(e.target.value)
        this.props.onChanged(parseInt(e.target.value.toString()));
    }
  render() {
    return <div className="row">
       <div className="col-md-12">
         <input type="number" onChange={this.onChangeNumber.bind(this)} className="form-control" value={this.state.currentValue}></input>
       </div>
       <div className="col-md-6">+</div>
       <div className="col-md-6">-</div>
     
    </div>;
  }
}
