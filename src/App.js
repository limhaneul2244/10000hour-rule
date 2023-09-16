import { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import MainTitle from './components/MainTitle/MainTitle';
import Result from './components/Result/Result';
import Modal from './components/Modal/Modal';
import './index.css';

function App() {

  const [isShow, setIsShow] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [inputJobValue, setInpuJobtValue] = useState("");
  const [inputHourValue, setInputHourValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isbackDropClose, setIsBackDropClose] = useState(false);

  const handleChangeInputJob = (e) => {
    setInpuJobtValue(e.target.value)
  }
  const handleInputHours = (e) => {
    const inputNumValue = e.target.value;
    setInputHourValue(inputNumValue);
    if (inputNumValue > 24 || inputNumValue <= 0) {
      alert('2자리 숫자로 24이하만 입력하세요.');
      setInputHourValue('');
      return;
    }
  }

  //공백 및 빈값유무 체크
  const handleClick = (e) => {
    e.preventDefault();
    if (inputJobValue.indexOf(" ") !== -1 || inputHourValue.indexOf(" ") !== -1) {
      alert("공백이 있어요 다시 입력해주세요.");
      return;
    }
    if (inputJobValue === '' || inputHourValue === '') {
      alert('모두 입력해주세요.');
      return;
    }
    setInpuJobtValue(inputJobValue);
    setInputHourValue(inputHourValue);
    setIsLoading(true); //loading이미지를 보여지게 함
    setIsShow(false);
  };

  useEffect(() => {
    if (isLoading) {
      const loading = setTimeout(() => {
        setIsLoading(false)
        setIsShow(true);
      }, 2000);
      return () => clearTimeout(loading);
    }
  }, [isLoading, isShow]);

  return (
    <>
      <main className="wrapper">
        <MainTitle />
        <form className='myPlan' action="">
          <fieldset>
            <div className='inner'>
              <div className='detailPlan'>
                나는
                <label className='a11y' htmlFor="">직업 입력란</label>
                <input
                  type="text"
                  placeholder='예)프로그래밍'
                  value={inputJobValue}
                  onChange={handleChangeInputJob}
                />
                전문가가 될 것이다.
              </div>
              <div className='detailPlan'>
                그래서 앞으로 매일 하루에
                <label className='a11y' htmlFor="">시간 입력란</label>
                <input
                  type='number'
                  placeholder='예)5'
                  value={inputHourValue}
                  onChange={handleInputHours}
                // onKeyDown={hendleKeyDown}
                />
                시간씩 훈련할 것이다.
              </div>
            </div>
            <button
              className='btn clickBtn'
              onClick={handleClick}
            >나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
          </fieldset>
        </form>
        {
          isLoading &&
          <img className='loading' src={process.env.PUBLIC_URL + '/imgs/loading.png'} alt="loading이미지" />
        }
        {
          isShow &&
          <Result
            inputJobValue={inputJobValue}
            inputHourValue={inputHourValue}
            setIsModal={setIsModal}
          />
        }
        <Footer />
      </main>
      {isModal && <Modal setIsModal={setIsModal} setIsBackDropClose={setIsBackDropClose} />}
    </>
  );
}

export default App;
