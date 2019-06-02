import styled from "@emotion/styled";

const BMIGuageStyle = styled.div`
  height: 250px;
  overflow: hidden;

  .chart-gauge {
    width: 400px;
    margin: 10px auto;
  }

  .chart-color1 {
    fill: #d44652;
  }

  .chart-color2 {
    fill: #8ed47f;
  }

  .chart-color3 {
    fill: #ffda88;
  }

  .chart-color4 {
    fill: #D41929;
  }

  .needle,
  .needle-center {
    fill: #f7f7f7;
  }

  .prose {
    text-align: center;
    font-family: sans-serif;
    color: #ababab;
  }
`;

export default BMIGuageStyle;
