import styled from "styled-components";
import { toRem } from "../../utils/ToRem";

export const ImcPage = styled.div`
width: 100vw;
height:100vh;
background:linear-gradient(116.82deg, rgba(247, 183, 24, 0.7) 0%, rgba(245, 197, 78, 0.6) 100%);
display: flex;
align-items: center;
justify-content: center;
`;

export const ContainerStyled = styled.div`
width: ${toRem(834)};
height: ${toRem(535)};
background: rgba(255, 255, 255, 0.6);
border-radius: ${toRem(15)};
`;

export const ContainerImc = styled.div`
display: grid;
grid-template-columns: auto;
grid-template-rows: auto auto auto auto auto auto auto;
justify-content: center;
`;

export const ContainerTitle = styled.div`
display: flex;
justify-content: center;
margin-top:${toRem(18)};
align-items: center;
`;

export const ContainerData = styled.div`
display: flex;
justify-content: space-between;
padding: 4px;
align-items: flex-end;
margin-top: ${toRem(30)};
`;