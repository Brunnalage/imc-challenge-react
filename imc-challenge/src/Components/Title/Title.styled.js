import styled from "styled-components";
import { toRem } from "../../utils/ToRem";

export const TitleH2 = styled.h2`
font-style: normal;
font-weight: 400;
font-size: ${toRem(40)};
line-height: ${toRem(60)};
font-family: 'Poppins', sans-serif;
color: #000000;
margin-block-start: 0;
margin-block-end: 0;
`;

export const TitleH3 = styled.h3`
font-style: normal;
font-weight: 300;
font-size: ${toRem(40)};
line-height: ${toRem(60)};
color: #F7B718;
margin-block-start: 0;
margin-block-end: 0;
`;

export const TitleH4 = styled.h4`
font-style: normal;
font-weight: 300;
font-size: ${toRem(24)};
line-height: ${toRem(36)};
color: #000000;
margin-block-start: 0;
margin-block-end: 0;
`;

export const TitleH5 = styled.h5`
font-style: normal;
font-weight: 300;
font-size: ${toRem(30)};
line-height: ${toRem(45)};
color: #000000;
margin-block-start: 0;
margin-block-end: 0;
`;