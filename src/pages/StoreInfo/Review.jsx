import React, { useState } from "react";
import { Container, Wrapper, Header } from "./StoreInfoStyle";

export default function Review() {
  const [restaurantName, setRestaurantName] = useState("");
  return (
    <Wrapper>
      <Container>
        <Header>
          {restaurantName.length === 0 ? "식당 이름" : restaurantName}
        </Header>
        <div>4.47</div>
      </Container>
    </Wrapper>
  );
}
