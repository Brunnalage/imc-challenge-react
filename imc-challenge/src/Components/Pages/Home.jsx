import React, { useState } from "react";
import { ImcPage, ContainerStyled, ContainerImc, ContainerTitle, ContainerData } from './Home.Styled';
import Button from "../../Components/Button/Button";
import InputRange from "../../Components/InputRange/InputRange";
import Title from "../../Components/Title/Title";

const Home = () => {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);    
    const [imc, setImc] = useState("00.00");
    const [info, setInfo] = useState(" Indice de Massa");


    function ChangeHeight(e) {
        setHeight(e.target.value)
    }

    function ChangeWeight(e) {
        setWeight(e.target.value)
    }

    
    const CalculateImc = () => {
       let heightValue = height / 100;
       let imcValue = weight /(heightValue * heightValue); 
       let imcSimple = imcValue.toFixed(2)      
       setImc(imcSimple) 
        if (imcSimple <= 18.5 ){
            setInfo(" (Abaixo do Peso)")
        } else if (imcSimple >= 18.5 && imcSimple < 24.9) {
            setInfo(" (Peso normal)")
        } else if (imcSimple >= 24.9 && imc < 29.9){
            setInfo("(Obesidade)")             
    }    
};

    function onSubmit(){
        CalculateImc();              
    }       
       
    return (
        <ImcPage>
            <ContainerStyled>
                <ContainerImc>
                    <ContainerTitle>
                        <Title Title="Calcule seu IMC"/>
                    </ContainerTitle>
                    <ContainerData>
                        <Title id="DataTitle" Title="Peso"/>
                        <Title id="NumberTitle" Title={weight}/>
                    </ContainerData>
                    <InputRange
                        max={200}
                        min={0}
                        onChange={ChangeWeight}
                    />
                    <ContainerData>
                        <Title id="DataTitle" Title="Altura"/>
                        <Title id="NumberTitle" Title={height}/>
                    </ContainerData>
                    <InputRange
                        max={220}
                        min={0}
                        onChange={ChangeHeight}
                    />
                    <Button type="button" Title="Calcular" onClick={onSubmit}/>
                    <Title id="ResultTitle"Title={'IMC: ' + imc} Info={info}></Title>
                </ContainerImc>
            </ContainerStyled>
        </ImcPage>
    );
}

export default Home;
