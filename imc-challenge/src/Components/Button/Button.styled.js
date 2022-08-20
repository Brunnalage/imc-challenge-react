import styled from "styled-components";
import { toRem } from "../../utils/ToRem";


export const ButtonStyled = styled.button`
width: ${toRem(350)};
height: ${toRem(60)};
background: #F7B718;
border-radius: ${toRem(4)};
font-style: normal;
font-weight: 300;
font-size: ${toRem(30)};
line-height: ${toRem(45)};
border: none;
font-family: 'Poppins', sans-serif;
margin-top: ${toRem(30)};
margin-bottom: ${toRem(40)};
color: #FFFFFF;
cursor: pointer;
&:hover{ 
    background: #E0B90B;
}
`;