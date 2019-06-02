import styled from "@emotion/styled";
import Colors from "./constants/Colors";

const AppStyle = styled.div`
 

  .card {
    background: ${Colors.backgroundlight};
    border-radius: 2px;
    display: inline-block;

    margin: 1rem;
    position: relative;
    width: 100%;
    padding: 30px;
  }

  .card-1 {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .card-1:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .card-2 {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .card-3 {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.09), 0 6px 6px rgba(0, 0, 0, 0.13);
  }

  .card-4 {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .card-5 {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }

  .label {
    font-size: 18px;
    text-align: left;
    text-transform: uppercase;
    width: 100%;
    font-size: 10px;
    font-weight: bolder;
    color: #ccc;
    margin-bottom:10px;
  }

  .form-control:focus {
  
    box-shadow: none!important;
}

  h3 {
  font-family:${Colors.headerFont}!important;
    color: #ddd;
  }
  h1, h2, h4, h5, h6 {
  font-family:${Colors.headerFont}!important;
  }

  .instructions {
    font-size: 12px;
    text-align: justify!important;

    width: 100%;
    
    font-weight: 500;
    color: #888;
  }
  .form-control {
    background-color: #121212 !important;
    border: #121212 !important;
    border-radius:0!important;
    
    color: #f7f7f7 !important;
  }
  .bmi {
    font-size: 80px;
    font-weight: bold;
    color: #f7f7f7;
    text-align:center;
    ${Colors.headerFont}
  }

  .logo{
    height:40px;   
    top:10px;
    right:10px;
    position:absolute;
    overflow:hidden;
    width:40px;
  }
.labelcenterbig{
  font-size: 24px;           
    font-weight: bolder;    
    margin-bottom:0px;
  text-align:center;
  ${Colors.headerFont}
}
  .labelcenter{
    text-align:center;
  }

  .spacer{
    margin-top: 15px
  }

  path {
    shape-rendering: geometricPrecision !important;
  }
`;

export default AppStyle;
