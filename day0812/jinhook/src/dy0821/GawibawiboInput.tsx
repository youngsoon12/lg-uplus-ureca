import React from 'react';
import { useRecoilState } from 'recoil';
import GawibawiboAtom from './GawibawiboAtom';

 const card = ["가위", "바위", "보"];


const GawibawiboInput = () => {
    const [result, setResult] = useRecoilState(GawibawiboAtom);
   
    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const computer = card[Math.floor(Math.random() * 3)];
        setResult({ ...result, player: e.currentTarget.value, computer: computer })
    };
    return (
      <div style={{ textAlign: "center" }}>
        <button
          style={{ width: "150px", height: "100px", margin: "10px", fontSize: "20px" }}
          onClick={handleOnClick}
          value={"가위"}
        >
          가위
        </button>
        <button
          style={{ width: "150px", height: "100px", margin: "10px", fontSize: "20px" }}
          onClick={handleOnClick}
          value={"바위"}
        >
          바위
        </button>
        <button
          style={{ width: "150px", height: "100px", margin: "10px", fontSize: "20px" }}
          onClick={handleOnClick}
          value={"보"}
        >
          보
        </button>
        <p>
          {">>"} 가위, 바위, 보 하나만 선택하세요 {"<<"}
        </p>
        <hr />
      </div>
    );
};

export default GawibawiboInput;