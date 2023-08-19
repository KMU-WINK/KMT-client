import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoImage = styled.img`
  margin-top: 15%;
  display: flex;
  width: 90%;
`;

export const StartButton = styled.button`
  width: 135px;
  height: 50px;
  background-color: #98c597;
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 19px;
  font-family: "Yeongdeok Snow Crab";
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  margin-top: 18%;
`;
