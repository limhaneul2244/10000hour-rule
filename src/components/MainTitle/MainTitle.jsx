import React from "react";
import css from "./MainTitle.module.scss";


/**
 * 상단부 main
 */
export default function MainTitle() {
  return (
    <>
      <section className={css.section1}>
        <div className={css.main}>
          <img
            className={css.mainImg}
            src="imgs/main_img.png"
            alt="1만시간의법칙"
          />
          <img className={css.mainClock} src="imgs/clock.png" alt="시계" />
        </div>
        <p className={css.mainTxt}>" 연습은 어제의 당신보다 당신을 더 낫게 만든다. "</p>

        <ul className={css.mainContent}>
          <li>
            <strong>1만 시간의 법칙</strong>은
          </li>
          <li>어떤 분야의 전문가가 되기 위해서는</li>
          <li>최소한 1만 시간의 훈련이 필요하다는 법칙이다.</li>
        </ul>
      </section>
    </>
  );
}
