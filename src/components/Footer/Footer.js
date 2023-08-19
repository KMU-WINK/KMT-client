import styled from "styled-components";
import { Link } from "react-router-dom";

export const UnderBar = styled.div`
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
`;

export const UnderBar1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  align-items: center;
`;
export const UnderBar2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  align-items: center;
`;
export const UnderBar3 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  align-items: center;
`;

export const UnderImage = styled.img`
  margin-top: 10px;
  width: 20px;
  height: 20px;
`;
export const FooterName = styled.div`
  font-size: 10px;
  margin-top: 5px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
