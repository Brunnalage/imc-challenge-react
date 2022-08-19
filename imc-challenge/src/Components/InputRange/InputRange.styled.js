import styled from "styled-components";
import { toRem } from "../../utils/ToRem";

export const InputRangeStyled = styled.input`
  overflow: hidden;
  display: block;
  appearance: none;
  max-width: ${toRem(350)};
  width: 100%;
  margin: 0;
  height: 45px;
  background-color: #F9EBC7;  
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 45px;
    border-radius: 16px;
    background: linear-gradient(white, white) 0% 50% / 100% 25px no-repeat transparent;
  }
  
  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: 45px;
    width: 45px;
    background: #F7B718;
    border-radius: 100%;
    border: 0;        
    top: 0;  
  }
`;
