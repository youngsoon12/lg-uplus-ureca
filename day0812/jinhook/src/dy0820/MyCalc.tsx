import React from "react";
import { useRecoilState, atom, RecoilRoot, useRecoilValue } from "recoil";

const Numbers = atom({
  key: "number",
  default: {
    num1: +"",
    num2: +"",
    option: "+",
    result: 0,
    togle: false,
  },
})

export const MyCalc = () => {
  return (
    <RecoilRoot>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "800px",
          margin: "0 auto",
          minHeight: "100vh",
        }}
      >
        <CalcHeader />
        <CalcBody />
        <CalcResult />
      </div>
    </RecoilRoot>
  );
};

const CalcHeader = () => {
  return (
    <h1
      style={{
        backgroundColor: "#f2f2f2",
        border: "1px solid black",
        padding: "6px",
      }}
    >
      초간단 계산기
    </h1>
  );
};

const CalcBody = () => {
  const [num, setNum] = useRecoilState(Numbers);
  console.log(num);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNum({ ...num, [e.target.name]: e.target.value });
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let result;
    switch (num.option) {
      case "+":
        result = Number(num.num1) + Number(num.num2);
        break;
      case "-":
        result = Number(num.num1) - Number(num.num2);
        break
      case "*":
        result = Number(num.num1) * Number(num.num2);
        break;
      case "/":
        result = Number(num.num1) / Number(num.num2);
        break;
      default:
        result = 0; // or handle invalid operations as needed
    }

    setNum({ ...num, result, togle: true });
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        style={{ width: "150px", textAlign: "center" }}
        onChange={onChange}
        name="num1"
      />
      <select name="option" id="" onChange={onChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="text"
        style={{ width: "150px", textAlign: "center" }}
        onChange={onChange}
        name="num2"
      />
      <button onClick={onClick}>계산</button>
    </div>
  );
};

const CalcResult = () => {
  const result = useRecoilValue(Numbers);
  return (
    <div
      style={{
        width: "500px",
        height: "150px",
        border: "1px dashed black",
        margin: "30px",
        fontSize: "45px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {result.togle && result.result}
    </div>
  );
};

export default MyCalc;
