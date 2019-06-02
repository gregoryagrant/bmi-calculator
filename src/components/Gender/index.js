import React, { Component } from "react";

export default class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0
    };
  }
  onChangeNumber(e) {
    this.setState({ currentValue: e.target.value });
    console.log(e.target.value);
    this.props.onChanged(parseInt(e.target.value.toString()));
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <select
            type="number"
            onChange={this.onChangeNumber.bind(this)}
            className="form-control"
            value={this.state.currentValue}
          >
            <option id="Agender">Agender</option>
            <option id="Androgyne">Androgyne</option>
            <option id="Androgynous">Androgynous</option>
            <option id="Bigender">Bigender</option>
            <option id="Cis">Cis</option>
            <option id="Cisgender">Cisgender</option>
            <option id="Cis Female">Cis Female</option>
            <option id="Cis Male">Cis Male</option>
            <option id="Cis Man">Cis Man</option>
            <option id="Cis Woman">Cis Woman</option>
            <option id="Cisgender Female">Cisgender Female</option>
            <option id="Cisgender Male">Cisgender Male</option>
            <option id="Cisgender Man">Cisgender Man</option>
            <option id="Cisgender Woman">Cisgender Woman</option>
            <option id="Female to Male">Female to Male</option>
            <option id="FTM">FTM</option>
            <option id="Gender Fluid">Gender Fluid</option>
            <option id="Gender Nonconforming">Gender Nonconforming</option>
            <option id="Gender Questioning">Gender Questioning</option>
            <option id="Gender Variant">Gender Variant</option>
            <option id="Genderqueer">Genderqueer</option>
            <option id="Intersex">Intersex</option>
            <option id="Male to Female">Male to Female</option>
            <option id="MTF">MTF</option>
            <option id="Neither">Neither</option>
            <option id="Neutrois">Neutrois</option>
            <option id="Non-binary">Non-binary</option>
            <option id="Other">Other</option>
            <option id="Pangender">Pangender</option>
            <option id="Trans">Trans</option>
            <option id="Trans*">Trans*</option>
            <option id="Trans Female">Trans Female</option>
            <option id="Trans* Female">Trans* Female</option>
            <option id="Trans Male">Trans Male</option>
            <option id="Trans* Male">Trans* Male</option>
            <option id="Trans Man">Trans Man</option>
            <option id="Trans* Man">Trans* Man</option>
            <option id="Trans Person">Trans Person</option>
            <option id="Trans* Person">Trans* Person</option>
            <option id="Trans Woman">Trans Woman</option>
            <option id="Trans* Woman">Trans* Woman</option>
            <option id="Transfeminine">Transfeminine</option>
            <option id="Transgender">Transgender</option>
            <option id="Transgender Female">Transgender Female</option>
            <option id="Transgender Male">Transgender Male</option>
            <option id="Transgender Man">Transgender Man</option>
            <option id="Transgender Person">Transgender Person</option>
            <option id="Transgender Woman">Transgender Woman</option>
            <option id="Transmasculine">Transmasculine</option>
            <option id="Transsexual">Transsexual</option>
            <option id="Transsexual Female">Transsexual Female</option>
            <option id="Transsexual Male">Transsexual Male</option>
            <option id="Transsexual Man">Transsexual Man</option>
            <option id="Transsexual Person">Transsexual Person</option>
            <option id="Transsexual Woman">Transsexual Woman</option>
          </select>
        </div>      
      </div>
    );
  }
}
