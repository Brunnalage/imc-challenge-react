import React from "react";
import { ButtonStyled } from "./Button.styled";

const Button = ({Title})=> {
    return(
        <ButtonStyled>{Title}</ButtonStyled>
    )
}

export default Button;