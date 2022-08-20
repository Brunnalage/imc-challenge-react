import React from "react";
import { ButtonStyled } from "./Button.styled";

const Button = ({Title, onClick})=> {
    return(
        <ButtonStyled onClick={onClick}>{Title}</ButtonStyled>
    )
}

export default Button;