import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Header = styled.div`
  width: 100%;
  font-size: 36px;
  text-align: center;
  background-color: #a9e0a8;
  color: white;
  font-weight: 800;
  padding: 21px;
`;
export const Rating = styled.div`
  font-size: 48px;
  font-weight: 600;
`;

export const ReviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ReviewCard = styled.div`
  width: 100%;
  height: 136px;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`;
export const ReviewInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  > div {
    font-size: 20px;
  }
`;
export const ReviewImg = styled.div`
  border-radius: 10px;
  width: 120px;
`;
export const InfoTitle = styled.div`
  color: black;
`;
export const InfoReview = styled.div`
  color: gray;
`;
export const InfoTime = styled.div`
  color: black;
  font-weight: 600;
`;
export const AddButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  font-size: 48px;
  text-align: center;
  line-height: 150%;
  border-radius: 80px;
  color: white;
  background-color: #a9e0a8;
`;
