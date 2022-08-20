import styled from "styled-components";
import { toRem } from "../../utils/ToRem";

export const TitleStyled = styled.p`
font-style: normal;
font-weight: 400;
font-size: ${toRem(40)};
line-height: ${toRem(60)};
font-family: 'Poppins', sans-serif;
color: #000000;
margin-block-start: 0;
margin-block-end: 0;

    &.NumberTitle{
    font-weight: 300;
    font-size: ${toRem(40)};
    line-height: ${toRem(43)};
    color: #F7B718;
    @media screen and (max-width: 768px) {
        font-size: ${toRem(30)};        
    }
    }

    &.DataTitle{
    font-weight: 300;
    font-size: ${toRem(24)};
    line-height: ${toRem(36)};
    color: #000000;  
     @media screen and (max-width: 768px) {
        font-size: ${toRem(20)};        
    }  
    }

    &.ResultTitle{
    font-weight: 300;
    font-size: ${toRem(26.8)};
    line-height: ${toRem(45)};
    color: #000000;
    @media screen and (max-width: 768px) {
        font-size: ${toRem(18)};        
    }
    }
    @media screen and (max-width: 768px) {
        font-size: ${toRem(30)};        
    }

`;
