import React from 'react';
import { useRecoilValue,selector } from 'recoil';
import gameResult from './GawibawiboAtom';

const check:any = selector({
    key: 'check',
    get: ({get}) => {
        const { player, computer } = get(gameResult);
        if (player === "가위" && computer === "가위") {
            return "비김";
        }
        if (player === "가위" && computer === "바위") {
          return "컴퓨터 승";
        }
        if (player === "가위" && computer === "보") {
          return "플레이어 승";
        }

        if (player === "바위" && computer === "가위") {
          return "플레이어 승";
        }
        if (player === "바위" && computer === "바위") {
          return "비김";
        }
        if (player === "바위" && computer === "보") {
          return "컴퓨터 승";
        }

        if (player === "보" && computer === "가위") {
          return "컴퓨터 승";
        }
        if (player === "보" && computer === "바위") {
          return "플레이어 승";
        }
        if (player === "보" && computer === "보") {
          return "비김";
        }

    }
})

const GawibawiboResult = () => {
    const result:any = useRecoilValue(check);
    const data = useRecoilValue(gameResult);
    return (
        <div style={{textAlign:"center"}}>
            <p>당신의 선택 : {data.player}</p>
            <p>컴퓨터의 선택 : {data.computer}</p>
            <p>결과 :  {result}</p>
        </div>
    );
};

export default GawibawiboResult;