import React, { useEffect, useRef, useState } from "react";
import {
  Wrapper,
  Container,
  Header,
  AddInputStyle,
  Savebtn,
  TextStyle,
  FileStyle,
  Photobtn,
  DeliveryTime,
  Default,
  PhotoWrapper,
  InputWrapper,
  Input,
} from "./AddStyle";

function Addhalfup() {
  const fileInput = useRef();

  const documentUpload = () => {
    fileInput.current.click();
  };
  const [restaurantName, setRestaurantName] = useState("");
  const [rating, setRating] = useState(0);
  const [deliveryOption, setDeliveryOption] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState("");
  const [foodImage, setFoodImage] = useState(null);
  const [reviewText, setReviewText] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // 여기서 리뷰 데이터를 서버로 보내야 하나?
  };

  const [dis, setDis] = useState(true);

  useEffect(() => {
    setRestaurantName("gun");
    if (
      rating > 0 &&
      reviewText.length > 0 &&
      (!deliveryOption || (deliveryOption && deliveryTime.length > 0))
    ) {
      setDis(false);
    } else {
      setDis(true);
    }
  }, [rating, reviewText, deliveryOption, deliveryTime]);

  return (
    <Wrapper>
      <Container onSubmit={handleFormSubmit}>
        <Header>
          {restaurantName.length === 0 ? "식당 이름" : restaurantName}
        </Header>

        <Default>
          <TextStyle>평점</TextStyle>
          <AddInputStyle
            type="number"
            step="0.5"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </Default>
        <InputWrapper>
          <label for="check1">
            <TextStyle>배달</TextStyle>
          </label>
          <Input
            type="checkbox"
            checked={deliveryOption}
            onChange={() => setDeliveryOption(!deliveryOption)}
            id="check1"
          />
        </InputWrapper>
        {deliveryOption && (
          <Default>
            <TextStyle>시간</TextStyle>
            <AddInputStyle
              type="text"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
            />
          </Default>
        )}
        <PhotoWrapper>
          <Photobtn onClick={documentUpload}>사진 추가하기 </Photobtn>
          <input type="file" ref={fileInput} style={{ display: "none" }} />
        </PhotoWrapper>
        <Default>
          <TextStyle>리뷰작성</TextStyle>
          <AddInputStyle
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          />
        </Default>
        <Savebtn type="submit" disabled={dis}>
          저장
        </Savebtn>
      </Container>
    </Wrapper>
  );
}

export default Addhalfup;
