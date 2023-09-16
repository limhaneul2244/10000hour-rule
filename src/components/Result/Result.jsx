import React, { useEffect, useState } from "react";
import css from "./Result.module.scss";

/**
 * @param inputJobValue 직업 입력
 * @param inputHourValue 시간 입력
 * @param setIsModal 모달 상태변경함수
 * @returns 결과 레이아웃
 */
export default function Result({ inputJobValue, inputHourValue, setIsModal }) {
  const [totalTime, setTotalTime] = useState(inputHourValue);
  const [jobText, setJobText] = useState(inputJobValue);

  useEffect(() => {
    setTotalTime(Math.floor(10000 / inputHourValue));
  }, []);

  // 모달함수
  const handleClickModal = () => {
    setIsModal(true);
  };

  //공유하기
  async function handelShare() {
    const currentURL = window.location.href;
    console.log(currentURL);
    try {
      await navigator.clipboard.writeText(currentURL);
      alert(`URL이 복사되었어요.👉${currentURL}`);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <ul className={css.myPlanResult}>
        <li className={css.result}>
          당신은 <strong className={css.bold}>{jobText}</strong> 전문가가
          되기 위해서
        </li>
        <li className={css.result}>
          대략 <strong className={css.bold}>{totalTime}</strong> 일 이상
          훈련하셔야 합니다!🐱‍🚀
        </li>
      </ul>
      <button className="btn pointBtn" onClick={handleClickModal}>
        훈련하러가기 GOGO!
      </button>
      <button className="btn" onClick={handelShare}>
        공유하기
      </button>
    </>
  );
}
