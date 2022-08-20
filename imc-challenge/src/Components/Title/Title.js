import React from "react";
import { TitleStyled } from "./Title.styled";

const Title = ({id, Title, Info}) => {     
    return(
    <TitleStyled className={`${id}`}id={id}>{Title}{Info}</TitleStyled>
    )    
};


export default Title;