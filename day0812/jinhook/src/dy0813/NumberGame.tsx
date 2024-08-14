import { useState, useRef, useEffect } from "react";
const NumberGame = (): JSX.Element => {
  const [random, setRandom] = useState<number>(Math.floor(Math.random() * 100) + 1);
  const text = useRef<HTMLInputElement>(null);
  const [log, setLog] = useState<any>({
    cnt: 1,
    num: [],
    result: [],
  });

  const onKeyUp = (e: any) => {
    if (e.key === "Enter") {
      checkAnswer(e);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (text.current) {
      if (text.current.value === String(random)) {
        setLog({
          cnt: log.cnt + 1,
          num: [...log.num, text.current.value],
          result: [...log.result, "정답입니다"],
        });
      } else if (Number(text.current.value) > random) {
        setLog({
          cnt: log.cnt + 1,
          num: [...log.num, text.current.value],
          result: [...log.result, "낮춰주세요"],
        });
      } else if (Number(text.current.value) < random) {
        setLog({
          cnt: log.cnt + 1,
          num: [...log.num, text.current.value],
          result: [...log.result, "올려주세요"],
        });
      }
      text.current.value = "";
    }
  };
  const startNewGame = () => {
    setRandom(Math.floor(Math.random() * 100) + 1);
    setLog({ cnt: 1, num: [], result: [] }); // 로그 초기화
  };
  return (
    <div>
      <h1>숫자맞추기</h1>
      <p>1 ~ 100사이 컴퓨터의 숫자를 맞춰보세요.</p>
      <div>{log.cnt}번째 시도</div>
      <input
        type="number"
        min="1"
        max="100"
        style={{ width: "100px" }}
        ref={text}
        onKeyDown={onKeyUp}
      />
      <button onClick={checkAnswer}>정답확인</button>{" "}
      <button onClick={startNewGame}>새로운게임 시작</button>
      <ul>
        {log.num &&
          log.num.map((data: any, idx: number) => {
            return (
              <li key={idx}>
                {idx + 1}번째 시도 [{data}] {log.result[idx]}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default NumberGame;
