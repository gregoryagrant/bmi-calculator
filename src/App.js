import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AppStyle from "./AppStyle";
import Ethnicity from "./components/Ethnicity";
import Gender from "./components/Gender";
import Slider from "./components/Slider";
import numeral from "numeraljs";
import BMIGuage from "./components/BMIGuage";
import logo from "./logo.svg";
import BMIReduction from "./components/Articles/BMIReduction";
import BMIIncrease from "./components/Articles/BMIIncrease";
import BMIMaintain from "./components/Articles/BMIMaintain";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      weight: 0,
      heightin: 0,
      heightft: 0,
      height: 0,
      ethnicity: "",
      gender: ""
    };
  }
  ChangeAge(age) {
    this.setState({ ...this.state, age });
  }

  getWeight(bmi) {
    if (bmi < 18.5) {
      return {
        text: "Underweight",
        percentage: (bmi * 25) / 18.5 / 100,
        color: "#d44652",
        hints: <BMIIncrease/>
      };
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return {
        text: "Normal Weight",
        percentage: (bmi * 50) / 24.9 / 100,
        color: "#8ed47f",
        hints: <BMIMaintain/>
      };
    } else if (bmi >= 25 && bmi <= 29.9) {
      return {
        text: "Overweight",
        percentage: (bmi * 75) / 29.9 / 100,
        color: "#ffda88",
        hints: <BMIReduction/>
      };
    } else {
      return {
        text: "Obesity",
        percentage: (bmi * 75) / 29.9 / 100 < 1 ? (bmi * 75) / 29.9 / 100 : 1,
        color: "#D41929",
        hints: <BMIReduction/>
      };
    }
  }

  ChangeEthnicity(ethnicity) {
    this.setState({ ...this.state, ethnicity });
  }

  ChangeGender(gender) {
    this.setState({ ...this.state, gender });
  }

  ChangeWeight(weight) {
    this.setState({ ...this.state, weight });
  }

  ChangeFT(ft) {
    this.setState({
      ...this.state,
      heightft: ft,
      height: ft * 12 + this.state.heightin
    });
  }

  ChangeIN(inch) {
    this.setState({
      ...this.state,
      heightin: inch,
      height: inch + this.state.heightft * 12
    });
  }

  render() {
    let bmi = 0;
    if (this.state.height > 0) {
      bmi =
        (703 * (this.state.weight / (this.state.height * this.state.height))) |
        0;
    }
    // console.log(this.state.height);
    const data = this.getWeight(bmi);
    return (
      <AppStyle className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-3">
              <img alt="logo" src={logo} className="logo" />
              <h3>Tell Me A Little About Yourself:</h3>

              <div className="instructions labelcenter">
                Please be aware that all information posted on this site is used
                to perform offline calculations and will never be shared or used
                for tracking or identifing any individual. These calculations
                are based on standard BMI calculations and are in no ways bias
                towards any gender, ethnic group or class.
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="label spacer">Gender</div>
                  <Gender onChanged={this.ChangeGender.bind(this)} />

                  <div className="label spacer" style={{ textAlign: "left" }}>
                    Age
                  </div>

                  <Slider
                    onChanged={this.ChangeAge.bind(this)}
                    Label={"Years"}
                    min={0}
                    max={120}
                  />

                  <div className="label spacer">Height</div>

                  <Slider
                    onChanged={this.ChangeFT.bind(this)}
                    Label={"FEET"}
                    min={1}
                    max={9}
                  />
                </div>
                <div className="col-md-6">
                  <div className="label spacer">Etnicity</div>
                  <Ethnicity onChanged={this.ChangeEthnicity.bind(this)} />

                  <div className="label spacer">Weight</div>
                  <Slider
                    onChanged={this.ChangeWeight.bind(this)}
                    Label={"Lbs"}
                    min={0}
                    max={1000}
                  />
                  <div className="label spacer">&nbsp;</div>
                  <Slider
                    onChanged={this.ChangeIN.bind(this)}
                    Label={"INCHES"}
                    min={0}
                    max={11}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card card-3">
              <h3>Your Results:</h3>
              <BMIGuage percentage={data.percentage} />
              <div className="label labelcenterbig" style={{ color: data.color }}>
                {data.text}
              </div>
              <div className="bmi" style={{ color: data.color }}>
                {numeral(bmi).format("0.00")}
              </div>
              <div className="label labelcenter" style={{ color: data.color }}>
                BMI
              </div>
              <div className="col-md-12">{data.hints}</div>
            </div>
          </div>
        </div>
      </AppStyle>
    );
  }
}
