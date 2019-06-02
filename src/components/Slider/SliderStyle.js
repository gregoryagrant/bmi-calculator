import styled from "@emotion/styled";
import Colors from "../../constants/Colors";

const ButtonStyle = styled.div`
 margin-top:15px;
 
 .irs--flat .irs-from, .irs--flat .irs-to, .irs--flat .irs-single {
  color:${Colors.highlighttext};
    background-color: ${Colors.highlight};

}


.irs--flat .irs-from:before, .irs--flat .irs-to:before, .irs--flat .irs-single:before {
  
 
    border-top-color: ${Colors.highlight};
}

.irs--flat .irs-line {
   
    background-color: ${Colors.background};
   
}

.irs--flat .irs-bar {
    top: 25px;
    height: 12px;
    background-color: ${Colors.highlight2};
}

.irs--flat .irs-handle > i:first-of-type {
   
    background-color: ${Colors.highlight2};
}


`;

export default ButtonStyle;