import { useState, useRef, useEffect } from "react";
const random = Math.floor(Math.random() * 100) + 1;
const NumberGame = (): JSX.Element => {
  const text = useRef<HTMLInputElement>(null);
  const [textArea, setTextArea] = useState<string>("");

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (text.current) {
      console.log(text.current.value);
      if (text.current.value === String(random)) {
        setTextArea("정답입니다.");
      } else if (Number(text.current.value) > random) {
        setTextArea("낮추세요");
      } else if (Number(text.current.value) < random) {
        setTextArea("높여요");
      }
      text.current.value = "";
    }
  };

  return (
    <div>
      <h1>숫자맞추기</h1>
      {random}
      <p>1 ~ 100사이 컴퓨터의 숫자를 맞춰보세요.</p>
      <input type="number" min="1" max="100" style={{ width: "100px" }} ref={text} />
      <button onClick={checkAnswer}>정답확인</button>
      <div>{textArea}</div>
    </div>
  );
};

export default NumberGame;
