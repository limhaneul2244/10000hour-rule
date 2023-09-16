import React from "react";
import './Footer.module.scss';

export default function Footer() {
  return (
    <footer>
      <img src={process.env.PUBLIC_URL + "/imgs/logo.png"} alt="" />
      <p>
        ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
      </p>
      <p>수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</p>
    </footer>
  );
}
