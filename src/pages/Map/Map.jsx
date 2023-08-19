import React, { useRef, useEffect, useState } from "react";
import * as P from "../../components/Page/Page.js";
import * as F from "../../components/Footer/Footer.js";
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

var map;

function Map() {
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();
  const getRestaurant = async () => {
    const response = await axios
      .get("http://3.34.99.129:8080/api/restaurants")
      .then(function (response) {
        setMarker(response.data);
      });
    // setRestaurants(response.data);ƒ
  };

  const getInfo = (id, storeName) => {
    navigate("/StoreInfo", { state: { id, storeName } });
  };

  const setMarker = (data) => {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var restaurant = data[i];
      console.log(restaurant);
      var position = new window.kakao.maps.LatLng(
        restaurant.latitude,
        restaurant.longitude
      );

      var marker = new window.kakao.maps.Marker({
        map: map,
        position: position,
        clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
      });

      // 인포윈도우를 생성합니다
      var infowindow = new window.kakao.maps.InfoWindow({
        // content : restaurant.name,
        // content : `<div onClick={}>${restaurant.name}</div>`,

        removable: true,
      });

      window.kakao.maps.event.addListener(
        marker,
        "click",
        makeOverListener(restaurant.id, restaurant.name)
      );
      // window.kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }
  };

  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
  function makeOverListener(id, storeName) {
    return function () {
      // infowindow.open(map, marker);
      getInfo(id, storeName);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  function makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }

  useEffect(() => {
    map = new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    getRestaurant();
  }, [loading]);

  return (
    <P.Page
      className="map"
      style={{ width: "400px", height: "850px" }}
      ref={container}
    >
      <F.UnderBar style={{ zIndex: 2 }}>
        <F.UnderBar1>
          <F.UnderImage src={Home}></F.UnderImage>{" "}
          <F.FooterName>홈</F.FooterName>
        </F.UnderBar1>

        <F.UnderBar2>
          <F.CustomLink to="/NewStore">
            <F.UnderImage src={Plus}></F.UnderImage>
            <F.FooterName>새 식당</F.FooterName>
          </F.CustomLink>
        </F.UnderBar2>

        <F.UnderBar3>
          <F.UnderImage src={Information}></F.UnderImage>{" "}
          <F.FooterName>내정보</F.FooterName>
        </F.UnderBar3>
      </F.UnderBar>
    </P.Page>
  );
}

export default Map;
