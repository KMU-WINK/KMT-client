import { startTransition } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
  padding: 0 16px;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

export const Header = styled.div`
  width: 100%;
  font-size: 25px;
  text-align: center;
`;
export const TextStyle = styled.div`
  font-size: 22px;
  text-align: center;
  display: inline;
`;

export const deliverybtn = styled.div`
  background-color: #f5f5f5;
`;
export const AddInputStyle = styled.input`
  background-color: #dcdde2;
  color: black;
  width: 60%;
  height: 50px;
  border: none;
  text-align: center;
  border-radius: 10px;
  font-size: 12px;
  outline: none;
`;

export const Savebtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 137px;
  height: 48px;
  border: none;
  background-color: #a9e0a8;
  opacity: 1;
  border-radius: 20px;
  color: white;
  margin: 200px;
  &:disabled {
    opacity: 0.5;
  }
`;

export const buttonsort = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const Photobtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: #dcdde2;
  border: none;
  border-radius: 20px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  font-size: 12px;
`;

export const Default = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  > input {
    font-size: 20px;
  }
`;
export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  gap: 16px;
`;
export const Input = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  width: 1.5rem;
  height: 1.5rem;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
  }
`;
