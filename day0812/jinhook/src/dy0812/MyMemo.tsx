import * as React from "react";
import { useState, useEffect } from "react";

const MyMemo = (): any => {
  let [list, setList] = useState<any>([]);
  let [memo, setMemo] = useState<string>("");
  let [timer, setTimer] = useState<number>(50);
  let [sw, setSw] = useState<boolean>(false);

  useEffect(() => {
    if (sw && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1); // 이전 타이머 값을 기반으로 업데이트
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [sw, timer]);
  console.log(list);
  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <h1>마이 메모장</h1>

      <h2>메모폼</h2>
      <h2>
        <input
          type="text"
          onChange={(e: any) => {
            setMemo(e.target.value);
          }}
          onKeyUp={(e: any) => {
            if (e.keyCode === 13) {
              if (memo.trim() !== "") {
                setList((prevList: any) => [...prevList, memo]);
                setMemo("");
              }
            }
          }}
          value={memo}
        />
        <button
          onClick={() => {
            setList([...list, memo]);
            setMemo("");
          }}
        >
          메모등록
        </button>
      </h2>
      <h2>메모목록</h2>
      <ul>
        {list.map((memo: string, idx: number): any => {
          return <li key={idx}>{memo}</li>;
        })}
      </ul>

      <h1>Timer:{timer}</h1>
      <button
        onClick={() => {
          setSw((prev) => !prev);
        }}
      >
        타이머 시작
      </button>
    </div>
  );
};

export default MyMemo;
