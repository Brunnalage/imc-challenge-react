import React from "react";
import { TitleH2, TitleH3, TitleH4, TitleH5 } from "./Title.styled";

const Title = ({tagName, Title}) => { 
    switch (tagName) {
        case "h2":
            <TitleH2>{Title}</TitleH2>
        case "h3":
            return <TitleH3>{text}</TitleH3>
        case "h4":
            return <TitleH4>{text}</TitleH4>
        case "h5":
            return <TitleH5>{text}</TitleH5>      
    
};
};

export default Title;