import React from "react";
import Image from "../../asset/img/kookmin.png";
import * as L from "./LogoStyle.js";
import * as P from "../../components/Page/Page.js";
import * as H from "../../components/Head/Head.js";

export default function Logo() {
  return (
    <P.Page>
      <H.LogoTitle>
        국맛탱
        <br />
        KMT
      </H.LogoTitle>
      <L.LogoImage src={Image} />
      <L.CustomLink to="/Map">
        <L.StartButton>시작</L.StartButton>
      </L.CustomLink>
    </P.Page>
  );
}
