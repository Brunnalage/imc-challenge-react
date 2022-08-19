import styled from "styled-components";
import { toRem } from "../../utils/ToRem";

export const TitleStyled = styled.h2`
font-style: normal;
font-weight: 400;
font-size: ${toRem(40)};
line-height: ${toRem(60)};
font-family: 'Poppins', sans-serif;
color: #000000;
margin-block-start: 0;
    margin-block-end: 0;
`;
