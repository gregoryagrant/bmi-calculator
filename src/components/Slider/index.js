import React, { Component } from "react";
import 'ion-rangeslider';
import '../../../node_modules/ion-rangeslider/css/ion.rangeSlider.css';
import SliderStyle from './SliderStyle';

export default class HeightSlider extends Component {
    componentDidMount(){
      window.$(this.refs.rangeSliderInput).on("change",(e)=>{
        console.log("changed");
        const instance = window.$(this.refs.rangeSlider).data("ionRangeSlider");
        instance.update({from:e.target.value|0});
        this.props.onChanged(e.target.value|0);
        if(e.target.value<this.props.min)
        {
          window.$(this.refs.rangeSliderInput).val(this.props.min);
        }
        if(e.target.value>this.props.max)
        {
          window.$(this.refs.rangeSliderInput).val(this.props.max);
        }
      });
      window.$(this.refs.rangeSlider).ionRangeSlider(
            {
                hide_min_max: true,
                keyboard: true,
                onChange:(e)=>{
                   this.props.onChanged(e.from);
                   window.$(this.refs.rangeSliderInput).val(e.from)
                },
                from: this.props.min,
                to: this.props.max,
                type: 'single',
                step: 1,
                postfix:" "+this.props.Label,
                min: this.props.min,
                max: this.props.max,
                grid: false
            }

        );
    }
  render() {
    return <SliderStyle className="row">     
    <div className="col-md-12">
       
             <input className="form-control" ref="rangeSlider" />
             <input className="form-control" ref="rangeSliderInput" type="number"/>
             </div>
            
            
    </SliderStyle>
  }
}
