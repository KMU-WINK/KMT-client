import styled from "styled-components";
import { Link } from 'react-router-dom';



export const LogoImage = styled.img`
    margin-top: 10%;
    display: flex; 
    justify-content: center; 
    align-items: center;
`;

export const StartButtonDiv = styled.div`
    margin-top: 20% ;
    display: flex; 
    justify-content: center; 
    align-items: center;    
`;
export const StartButton = styled.button`
    width: 100px;
    height: 40px;
    background-color:#98C597;
    border:none;
    color: white;
    border-radius:10px;
    cursor:pointer;
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
`;


