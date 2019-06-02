import React, { Component } from "react";
import Slider from "react-slick";
import ArticleStyle from "../ArticleStyle";
export default class BMIReduction extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <ArticleStyle>
        <Slider {...settings}>
          <div className="hint-container">
            <h3>How to maintain a healthy Body Mass Index (BMI)</h3>
            <p>
              People come in all shapes and sizes. While it&rsquo;s good to
              embrace our differences, staying healthy is important for
              everyone. One key indicator of health is your body fat percentage.
            </p>
            <p>
              The first step in managing your body fat is to get an accurate
              measurement of how much body fat you have. The best way gage this
              is to measure your Body Mass Index (BMI), which estimates your
              percentage of body fat based on your height and weight.
            </p>
            <p>
              For adults, your BMI is calculated by dividing your weight over
              the square of your height. By factoring in both your height and
              weight (and not just your weight alone), your BMI helps determine
              if you are at risk of certain diseases.
            </p>
          </div>
          <div className="hint-container">
            <h3>What is a healthy BMI?</h3>
            <p>
              Adult Body Mass Index is a range of body fat percentages that are
              determined by your age and height. Typically, people with a
              BMI&nbsp;<strong>between 18.5 and 25</strong>&nbsp;are considered
              at a healthy percentile. Those with a BMI lower than 18.5 are
              considered underweight, and those with a BMI between 25 and 30 are
              considered overweight. People with a BMI of 30 or higher are
              considered obese and at high risk for disease.
            </p>
            <p>
              While BMI measurements are standard for most people, there are
              occasional exceptions to the rule. For example, athletes and
              people with a higher level of muscle mass may generate a BMI
              calculation that designates them as overweight or even obese,
              despite their high level of fitness. It&rsquo;s important for
              athletes to talk to their doctor to ensure they&rsquo;re
              maintaining a healthy body fat balance.
            </p>
            <hr />
            <p>
              <strong>
                Related Reading:&nbsp;
                <a href="https://www.hioscar.com/news/how-to-stay-active-and-why-it-matters-for-your-health">
                  How to stay active &ndash; and why it matters for your health
                </a>
              </strong>
            </p>
            <hr />
          </div>
          <div className="hint-container">
            <h3>What are the health consequences of a high BMI?</h3>
            <p>
              When it comes to the amount of body fat you carry, the stakes are
              high. Obesity and high levels of body fat carry a variety of
              health consequences, and can affect your overall health and
              quality of life. They include:
            </p>
            <ul>
              <li>High blood pressure</li>
              <li>High cholesterol levels</li>
              <li>Diabetes</li>
              <li>Heart disease</li>
              <li>Stroke</li>
              <li>Gallbladder disease</li>
              <li>Osteoarthritis</li>
              <li>Sleep apnea</li>
              <li>Chronic inflammation and pain</li>
              <li>Certain types of cancer</li>
              <li>Mental disorders such as anxiety and depression</li>
              <li>Increased risk of death</li>
            </ul>
          </div>
          <div className="hint-container">
            <h3>How to measure your BMI</h3>
            <p>
              During your annual physical, your doctor will typically measure
              your height and weight. Based on this information, they will chart
              your BMI. In between your doctor&rsquo;s visits, you can
              self-monitor your BMI by weighing yourself and using your a&nbsp;
              <a href="http://www.mayoclinic.org/diseases-conditions/obesity/in-depth/bmi-calculator/itt-20084938">
                BMI calculator
              </a>
              &nbsp;for up-to-date measurements.
            </p>
          </div>
          <div className="hint-container">
            <h3>Measuring BMI for children and teens</h3>
            <p>
              Maintaining a healthy BMI takes some work. For starters,
              it&rsquo;s important to exercise at least&nbsp;
              <a href="https://www.cdc.gov/healthyweight/losing_weight/">
                60-90 minutes
              </a>
              &nbsp;most days of the week. Staying hydrated and eat a balanced
              diet are equally important. If your BMI isn&rsquo;t where it
              should be, you may want to reduce your caloric intake and increase
              your exercise.
            </p>
          </div>
          <div className="hint-container">
            <h3>Measuring BMI for children and teens</h3>
            <p>
              Children and teen BMIs are measured using the same formula as
              adult BMIs, but with age and gender factored in. This is due to
              variances in BMIs throughout children&rsquo;s development that may
              tip the scales. Talk to your child&rsquo;s pediatrician about
              their BMI as it changes and what to expect as they get older.
            </p>
          </div>
          <div className="hint-container">
            <h3>When to call in a doctor</h3>
            <p>
              If your BMI score is outside of a healthy percentile, it&rsquo;s
              time to call a professional. Consult your&nbsp;
              <a href="https://www.hioscar.com/glossary/pcp-vs-specialist">
                primary care doctor
              </a>
              &nbsp;for advice on ways you can achieve a healthy balance of body
              fat. If needed, you may need to see a dietician to achieve your
              health goals.
            </p>
          </div>
        </Slider>
      </ArticleStyle>
    );
  }
}
