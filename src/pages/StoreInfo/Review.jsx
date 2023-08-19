import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  Header,
  Rating,
  ReviewCard,
  ReviewInfo,
  ReviewWrapper,
  ReviewImg,
  InfoTitle,
  InfoReview,
  InfoTime,
  AddButton,
} from "./StoreInfoStyle";
import Image from "../../asset/img/defaultImg.png";
import { useNavigate } from "react-router-dom";
export default function Review(props) {
  const [restaurantName, setRestaurantName] = useState("");
  const [rating, setRating] = useState(0);

  const navigate = useNavigate();
  const toAddPage = (id, storeName) => {
    console.log("gugugu");
    navigate("/Add", { state: { id, storeName } });
  };

  let [data, setData] = useState([]);

  const addReview = async () => {
    const response = await fetch(
      `http://3.34.99.129:8080/api/restaurant/${props.state.id}/reviews`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const body = await response.json();

    if (body) {
      setData(body);
      let sumRate = 0;
      for (let i = 0; i < body.length; i++) {
        console.log(typeof body[i].rate);
        sumRate += body[i].rate;
      }
      console.log(typeof sumRate);
      setRating(sumRate / body.length);
    } else {
      console.log("fail");
    }
  };
  useEffect(() => {
    addReview();
    setRestaurantName(props.state.storeName);
    console.log(props);
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header>
          {restaurantName.length === 0 ? "식당 이름" : restaurantName}
        </Header>
        <Rating>{data && (rating > 0 ? rating : "")}</Rating>
        <ReviewWrapper>
          {data?.map((item, index) => (
            <ReviewCard key={index}>
              <ReviewImg>
                <img src={Image} alt={`Review ${index}`} />
              </ReviewImg>
              <ReviewInfo>
                <InfoTitle>
                  {item.deliveryTime === 0 ? "포장" : "배달"}
                </InfoTitle>
                <InfoReview>{item.comment}</InfoReview>
                <InfoTime>{item.deliveryTime}분 소요</InfoTime>
              </ReviewInfo>
            </ReviewCard>
          ))}
        </ReviewWrapper>
        <AddButton
          onClick={() => toAddPage(props.state.id, props.state.storeName)}
        >
          +
        </AddButton>
      </Container>
    </Wrapper>
  );
}
