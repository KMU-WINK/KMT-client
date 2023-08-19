import React from 'react'
import Image from '../../asset/img/kookmin.png';
import * as L from "./LogoStyle.js";
import * as F from "../../components/Footer/Footer.js";
import * as P from "../../components/Page/Page.js";
import * as H from "../../components/Head/Head.js";
import { Link  } from "react-router-dom";


export default function Logo() {
    return (
        <P.Page>
            
            <H.LogoTitle>
                국맛탱
                <br></br>KMT
            </H.LogoTitle>

            <L.LogoImage src={Image}></L.LogoImage>

            <L.StartButtonDiv>
                <L.CustomLink to='/Map'>
                    <L.StartButton>
                        시작
                    </L.StartButton>
                </L.CustomLink>
            </L.StartButtonDiv>

        </P.Page>
    )
}
