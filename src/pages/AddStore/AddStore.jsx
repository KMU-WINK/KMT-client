import React from 'react'
import Home from '../../asset/img/Home.png';
import Plus from '../../asset/img/+.png';
import Information from '../../asset/img/Information.png';
import * as F from "../../components/Footer/Footer.js";
import * as P from "../../components/Page/Page.js";

export default function add() {
    return (
        <P.Page>

        <F.UnderBar>
                <F.UnderBar1>
                    <F.UnderImage src={Home}></F.UnderImage> <F.FooterName>홈</F.FooterName>
                </F.UnderBar1>
                
                <F.UnderBar2>
                    <F.UnderImage src={Plus}></F.UnderImage> <F.FooterName>리뷰</F.FooterName>
                </F.UnderBar2>
                
                <F.UnderBar3>
                    <F.UnderImage src={Information}></F.UnderImage> <F.FooterName>추가</F.FooterName>
                </F.UnderBar3>
            </F.UnderBar>
        </P.Page>
    )
}
