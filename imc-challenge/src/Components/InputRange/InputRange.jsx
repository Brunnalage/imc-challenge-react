import React from "react";
import { InputRangeStyled } from "./InputRange.styled"

const InputRange = ({onChange, max, min}) => {
    return(
        <InputRangeStyled onChange={onChange} max={max} min={min} type="range"/>
    )
}

export default InputRange;