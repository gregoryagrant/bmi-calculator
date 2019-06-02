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
            <h3>Eating Habits that Improve Health and Lower Body Mass Index</h3>
            <p>
              More and more research studies are confirming the importance of
              keeping body mass index (BMI) and waistline measurements under
              control in order to reduce the risk of&nbsp;cancer, other serious
              diseases, and&nbsp;premature death.&nbsp;But sticking to a healthy
              diet &ndash; especially when we&rsquo;re trying to lose weight
              &ndash; can be hard for lots of reasons. Keeping track of calories
              and fat percentages can be confusing, and the nutrition labels on
              the foods we buy aren&rsquo;t always that helpful. How are
              consumers supposed to figure out which diet advice is just hype
              &ndash; that ultimately don&rsquo;t contribute to better health
              &ndash; and which advice offers good, medically sound information?
            </p>
            <p>Here are some basic guidelines to keep in mind:</p>
            <ul>
              <li>Calories matter</li>
              <li>Serving size matters</li>
              <li>Fats and cholesterol matter</li>
              <li>Fruits, vegetables and whole grains matter</li>
              <li>Exercise matters</li>
              <li>Sticking to it matters</li>
            </ul>
          </div>
         <div className="hint-container">
            <h3>
              {" "}
              The Only Way to Lose Weight is to Eat Fewer Calories Than You Burn
              in a Day
            </h3>
            <p>
              Simply increasing your activity level might be enough if you only
              need to lose a few pounds to get your BMI into a healthy range.
              &nbsp;Most of the time, however, eating fewer calories is also
              going to be needed. &nbsp;The calories and fat in the foods we eat
              add up quickly! &nbsp;For example, have you eaten at a fast food
              chain recently? &nbsp;To work off the calories from a double
              cheeseburger, extra large fries and a 24 ounce soft drink &ndash;
              about 1500 calories &ndash; you would have to run for two and half
              hours at a ten minute mile pace! (For more information, see&nbsp;
              <a
                title="Fast Food Facts: Calories and Fats"
                href="http://www.center4research.org/2010/06/fast-food-facts-calories-and-fat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fast Food Facts: Calories and Fats
              </a>
              ).
            </p>
          </div>
         <div className="hint-container">
            <h3>
              Eating Fewer Calories Doesn&rsquo;t Necessarily Mean Eating Less
              Food
            </h3>
            <p>
              The trick to dieting without being hungry is to choose foods that
              contain fewer calories and also fill you up. An example of this
              would be having a piece of fruit instead of fries with lunch.
              &nbsp;
              <em>
                It helps to remember that not all foods are created equal!&nbsp;
                Some foods, such as nuts, are high in nutrients and essential
                vitamins, while others lack nutritional substance, such as
                products containing added sugars. &ldquo;
              </em>
              Nutrient-dense food&rdquo; provides substantial amounts of
              vitamins and minerals and relatively few calories, but leaves you
              feeling fuller while also supplying valuable fuel for your
              body.&nbsp; A person is more likely to stick to a diet-while
              feeling better and healthier-if calories are
              nutrition-dense.&nbsp; Empty calories from simple carbohydrates
              found in foods with processed and refined sugars, such as candy,
              pasta and bread made from white flour, and foods with corn syrup,
              leave you hungry again soon after, craving more food.&nbsp; This
              is because simple carbohydrates quickly turn into useless sugar,
              whereas complex carbohydrates, such as vegetables, whole-grain
              breads and cereals, and low-fat yogurt and milk, provide
              long-lasting nutrients, improve digestion, help stabilize blood
              sugar, and keep your energy at an even level.&nbsp; Although foods
              such as fruit are also considered simple carbohydrates, they
              contain vitamins and nutrients that occur naturally, unlike those
              found in processed and refined foods.
            </p>
            <p>
              A 2011 study in the respected New England Journal of Medicine
              found that certain foods were linked to weight change more than
              others. After following participants for an average of 17 years,
              researchers found that weight increase was most strongly linked to
              foods such as potato chips, sugar-sweetened beverages, and
              unprocessed red meats.&nbsp; Foods such as vegetables, whole
              grains, nuts, fruits, and yogurts were closely linked to
              preventing weight-gain.
            </p>
          </div>
         <div className="hint-container">
            <h3>
              Eating 5 Smaller Meals Might Work Better Than Eating 3 Larger Ones
            </h3>
            <p>
              Most people are surprised to learn that eating 5 or 6 times a day
              can be a better way to lose weight than eating only 3 times a day!
              This only works, however, if you take care to control not only the
              calorie content but also the amount of food you&rsquo;re eating.
              &nbsp;The goal is to eat a small amount of food &ndash; like a cup
              of no-fat yoghurt, for example &ndash; every 3 hours or so.
              &nbsp;Eat only enough so that you don&rsquo;t feel hungry, but
              never so much that you feel stuffed. Some people recommend eating
              your meals off of smaller plates, because research has shown that
              people have a tendency to try to eat all of what is served to
              them. Unfortunately, portion sizes for restaurant meals and other
              prepared foods, and even in our homes &ndash; everything from
              breakfast muffins to a plate of spaghetti &ndash; have grown to
              very unhealthy proportions in the last two decades.
            </p>
          </div>
         <div className="hint-container">
            <h3>
              Eat Less Cholesterol and Less Fat &ndash; Especially Less
              Saturated Fat, and Almost No Trans-Fat
            </h3>
            <p>
              Most people have heard that cholesterol is bad, and eating less of
              it is important. &nbsp;But our bodies also make cholesterol from
              the fats that we eat. Fats are also very high in calories. So
              cutting down on total fat intake is helpful.
            </p>
            <p>
              All fats, however, are not alike, and that&rsquo;s why it&rsquo;s
              important to check food labels to be sure that you&rsquo;re eating
              the smallest amount of saturated fat and of trans fat possible.
              These tend to be the kinds of fat that are found in milk and milk
              products, those that are solid at room temperature &ndash; like
              the fat in meat products, butter, margarine, shortening and lard
              &ndash; and the fats that come from baked goods and fried foods.
              The fats you do eat should be mostly &ldquo;unsaturated&rdquo; or
              &ldquo;polyunsaturated&rdquo; fats. Although there are some
              exceptions, these tend to be liquid at room temperature, like
              canola oil, olive oil and some of the other vegetable oils.
            </p>
          </div>
         <div className="hint-container">
            <h3>
              Eat More Fruits, Vegetables, Whole Grains, and Low- or No-Fat
              Dairy Products Every Day
            </h3>
            <p>
              There are many good resources to help you learn about healthy
              eating. For example, the US Department of Agriculture website
              at&nbsp;
              <a
                href="http://www.choosemyplate.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Plate&nbsp;
              </a>
              helps you tailor the government&rsquo;s dietary recommendations to
              your nutritional needs. Nutritionists at the Harvard School of
              Public Health have similar (but not identical)&nbsp;
              <a
                title="Harvard Health Food Guidelines"
                href="http://www.hsph.harvard.edu/nutritionsource/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                healthy food guidelines
              </a>
              . What these diets have in common includes recommendations to:
            </p>
            <ul>
              <li>
                Aim for at least five servings of fruits and vegetables a day.
                Usually, the more colorful the fruit or vegetable, the more
                nutritious. For example, dark green spinach has more nutrients
                than light green iceberg lettuce.
              </li>
              <li>
                Try and choose whole grain cereal, pasta, rice, and bread. Many
                foods that claim &ldquo;whole wheat&rdquo; or &ldquo;whole
                grain&rdquo; on the front of the package are really made with
                mostly white, processed flour &ndash; which isn&rsquo;t nearly
                as nutritious. Always check the ingredients to see if
                &ldquo;whole wheat&rdquo; or &ldquo;whole grain&rdquo; is
                thefirstingredient listed. And don&rsquo;t be fooled by how a
                food looks. For example, some dark brown breads are colored with
                coffee or other dyes, not whole grains. And remember, whole
                grain rice is brown, not white rice.
              </li>
              <li>
                Avoid food that is high in sugar, like pastries, sweetened
                cereal, and soda or fruit-flavored drinks.
              </li>
              <li>
                Reduced-fat or no-fat (skim) milk, reduced-fat cheese, and
                low-fat or no-fat yoghurt are good sources of the protein and
                calcium we need. Try to eat 2-4 servings of low-fat or no-fat
                dairy products each day.
              </li>
            </ul>
          </div>
         <div className="hint-container">
            <h3>Exercise Does More Than Burn Calories</h3>
            <p>
              Increasing the amount of exercise you do each day means you burn
              more calories to help you lose weight. &nbsp;And, research has
              shown very clearly that 30 minutes of moderately strenuous daily
              exercise is also one of the most important requirements for
              disease prevention &ndash; even for people who are already at an
              ideal weight. &nbsp;The exercise you choose doesn&rsquo;t need to
              be elaborate, or to take place in a gym. &nbsp;Walking, biking,
              swimming, or gardening can do the trick, and getting a friend or
              family member to exercise with you can turn this into a valued
              part of your daily routine. &nbsp;Learn more about the health
              benefits of physical activity and how to get started from
              the&nbsp;
              <a
                title="CDC Physical Activity Guidelines"
                href="http://www.cdc.gov/nccdphp/dnpa/physical/recommendations/adults.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                CDC
              </a>
              .
            </p>
          </div>

         <div className="hint-container">
            <h3>Staying Healthy is a Life-Long Proposition</h3>
            <p>
              When we think about dieting, most of us think about setting a
              weight-loss goal that will determine how long we watch what
              we&rsquo;re eating. &nbsp;A better way to think about it might be
              to ask yourself the question: How long do I want to try to avoid
              developing chronic disease? Put in those terms, it&rsquo;s easy to
              see that getting control of BMI and eating foods that contribute
              to continuing good health (or that don&rsquo;t directly contribute
              to the development of dangerous disease conditions) is not a
              short-term goal. &nbsp;For many of us, doing what it takes to get
              our BMI into a healthy range and to keep it there means learning
              to live our lives in a new way. Scientists have found that one of
              the keys to success is to think about these goals every day. For
              example, people who get on a scale and check their weight daily
              are more successful at keeping their weight under control than
              people who don&rsquo;t.
            </p>
          </div>
         <div className="hint-container">
            <h3>
              {" "}
              Don&rsquo;t Waste Your Time, Energy, and Money on &ldquo;Quick
              Fix&rdquo; Solutions
            </h3>
            <p>
              For some people, there may be faster ways to lose weight than
              following the diet suggestions listed here. &nbsp;But the
              important thing to remember is that weight loss is not the only
              goal. &nbsp;The more important goal is to keep your risk of
              developing chronic disease and dying younger as low as possible.
              &nbsp;Fad diets, diet pills, protein powders, liposuction, and
              even intestinal or gastric bypass surgery might provide a leaner
              profile, but they don&rsquo;t provide the nutrients needed to keep
              you as healthy as you could be.
            </p>
          </div>
        </Slider>
      </ArticleStyle>
    );
  }
}
