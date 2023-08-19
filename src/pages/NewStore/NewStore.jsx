import React, { useRef, useEffect, useState } from "react";
import * as P from "../../components/Page/Page.js";
import * as H from "../../components/Head/Head.js";
import * as F from "../../components/Footer/Footer.js";
import * as N from "./NewStoreStyle.js";
import Home from "../../asset/img/Home.png";
import Plus from "../../asset/img/+.png";
import Information from "../../asset/img/Information.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(37.611078, 126.995938), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

export default function NewStore() {
  const [location, setLocation] = useState({ lat: "", lng: "" });
  const [restaurantName, setRestaurantName] = useState("");
  const navigate = useNavigate();

  const handleSaveClick = () => {
    // 서버로 전송할 데이터 생성
    const dataToSend = {
      latitude: location.lat,
      longitude: location.lng,
      name: restaurantName,
    };

    // Axios를 사용하여 POST 요청 보내기
    axios
      .post("api/restaurants", dataToSend)
      .then((response) => {
        // 요청이 성공했을 때의 처리
        console.log(
          "Location 정보가 성공적으로 전송되었습니다.",
          response.data
        );
        navigate("/Map");
        // 지도 페이지로 이동하려면, React Router 또는 다른 라우팅 라이브러리를 사용하여 화면을 전환할 수 있습니다.
        // 예: history.push('/map');
      })
      .catch((error) => {
        // 요청이 실패했을 때의 처리
        console.error("Location 정보 전송 중 오류 발생:", error);
      });
  };

  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      const map = new window.kakao.maps.Map(container, options);
      const marker = new window.kakao.maps.Marker({
        // 지도 중심좌표에 마커를 생성합니다
        position: map.getCenter(),
      });
      marker.setMap(map);

      // 클릭 이벤트 리스너
      window.kakao.maps.event.addListener(map, "click", (mouseEvent) => {
        var latlng = mouseEvent.latLng;
        marker.setPosition(latlng);
        setLocation({ lat: latlng.getLat(), lng: latlng.getLng() });
      });
    });
  }, []);

  return (
    <P.Page>
      <H.LogoTitle>
        국맛탱
        <br />
        KMT
      </H.LogoTitle>
      <N.StoreName1>
        식당 이름:
        <input
          onChange={(e) => setRestaurantName(e.target.value)}
          style={{
            marginLeft: "10px",
            height: "20px",
          }}
        />
      </N.StoreName1>
      <div
        id="map"
        style={{ width: "100%", height: "400px", marginTop: "30px" }}
      ></div>
      <N.SaveButton onClick={handleSaveClick}>저장</N.SaveButton>
      <F.UnderBar style={{ zIndex: 2 }}>
        <F.UnderBar1>
          <F.CustomLink to="/Map">
            <F.UnderImage src={Home}></F.UnderImage>
            <F.FooterName>홈</F.FooterName>
          </F.CustomLink>
        </F.UnderBar1>

        <F.UnderBar2>
          <F.UnderImage src={Plus}></F.UnderImage>
          <F.FooterName>새 식당</F.FooterName>
        </F.UnderBar2>

        <F.UnderBar3>
          <F.UnderImage src={Information}></F.UnderImage>{" "}
          <F.FooterName>내정보</F.FooterName>
        </F.UnderBar3>
      </F.UnderBar>
    </P.Page>
  );
}
