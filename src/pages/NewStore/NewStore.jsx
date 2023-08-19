import React, { useRef, useEffect, useState } from 'react'
import * as P from "../../components/Page/Page.js";
import * as H from "../../components/Head/Head.js";
import * as F from "../../components/Footer/Footer.js";
import * as N from "./NewStoreStyle.js";
import Home from '../../asset/img/Home.png';
import Plus from '../../asset/img/+.png';
import Information from '../../asset/img/Information.png';

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(37.611078, 126.995938), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

export default function NewStore() {
    const [location, setLocation] = useState({ lat: "", lng: "" });
    
    useEffect(() => {
        window.kakao.maps.load(() => {
            const container = document.getElementById("map");
            const map = new window.kakao.maps.Map(container, options);
            const marker = new window.kakao.maps.Marker({ 
                // 지도 중심좌표에 마커를 생성합니다 
                position: map.getCenter() 
            });
            marker.setMap(map);

          // 클릭 이벤트 리스너
        window.kakao.maps.event.addListener(map, "click", (mouseEvent) => {
            var latlng = mouseEvent.latLng;
            setLocation({ lat: latlng.getLat(), lng: latlng.getLng() });
        });
    });
}, []);
    

    

    return (
        <P.Page>
            <H.LogoTitle>
                국맛탱
                <br></br>KMT
            </H.LogoTitle>

            <N.StoreName1>
                <div>식당 이름: </div>
                <input style={{marginLeft:"10px",height:"20px"}}></input>
            </N.StoreName1>

            <N.StoreName2>
                <div>주소: </div>
                <input id="addressInput" style={{marginLeft:"10px",height:"20px"} }></input>
            </N.StoreName2>

            <div id="map" style={{ width: "100%", height: "400px", marginTop: "30px" }} ></div>


            <N.SaveButtonDiv>
                <N.SaveButton>저장</N.SaveButton>
            </N.SaveButtonDiv>
            <F.UnderBar style={{ zIndex: 2 }}>
                <F.UnderBar1>
                    <F.CustomLink to='/Map'>   
                        <F.UnderImage src={Home}></F.UnderImage>
                        <F.FooterName>홈</F.FooterName>
                    </F.CustomLink> 
                </F.UnderBar1>
                
                <F.UnderBar2>
                    <F.UnderImage src={Plus}></F.UnderImage><F.FooterName>새 식당</F.FooterName>
                </F.UnderBar2>
                
                <F.UnderBar3>
                    <F.UnderImage src={Information}></F.UnderImage> <F.FooterName>내정보</F.FooterName>
                </F.UnderBar3>
            </F.UnderBar>
        </P.Page>
    )
}
