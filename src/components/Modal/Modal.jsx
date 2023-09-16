import React from "react";
import css from "./Modal.module.scss";

export default function Modal({ setIsModal }) {
  const handleClose = () => {
    setIsModal(false);
  };

  const handleBackDropClose = (e) => {
    console.log("배경이 클릭되었어요");
    setIsModal(false);
  };
  return (
    <div className={css.dimmed} onClick={handleBackDropClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <div className={css.modalTop}>
          <h1>화이팅!!♥♥♥</h1>
          <h3>당신의 꿈을 응원합니다.</h3>
        </div>
        <div className={css.modalBody}>
          <span className="a11y">licat이미지</span>
        </div>
        <button className="btn pointBtn" onClick={handleClose}>
          종료하고 진짜 훈련하러 가기 GO!GO!
        </button>
      </div>
    </div>
  );
}
