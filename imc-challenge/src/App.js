import React from "react";
import {ImcPage, ContainerStyled, ContainerTitle} from './App.styled';
import Title from "./Components/Title/Title";

function App() {
  return (
    <ImcPage>
      <ContainerStyled>
        <ContainerTitle>
      <Title Title="Calcule seu IMC"/>
      </ContainerTitle>
      </ContainerStyled>
    </ImcPage>
  );
}

export default App;
