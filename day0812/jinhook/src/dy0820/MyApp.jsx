import React from "react";
import { createContext, useContext, useState } from "react";
import { RecoilRoot, atom, useRecoilValue, useRecoilState } from "recoil";

const MyText = createContext();
const MyText2 = atom({
  key: "message",
  default: {
    text: "리코일입니다",
  },
});
const MyText3 = atom({
  key: "message",
  default: {
    text: "리코일입니다",
  },
});
export const MyApp = () => {
  const a = "이지영입니다";
  //전달데이터 => "쉬는 시간"
  return (
    <RecoilRoot>
      <MyText.Provider value={a}>
        <div>
          <GrandParent value="조용주입니다" />
        </div>
      </MyText.Provider>
    </RecoilRoot>
  );
};

const GrandParent = ({ value }) => {
  const jiyoung = useContext(MyText);
  console.log(value);
  console.log(jiyoung);
  return <Parent value={value} />;
};

const Parent = ({ value }) => {
  return <Child value={value} />;
};

const Child = ({ value }) => {
  return <GrandChild value={value} />;
};

const GrandChild = ({ value }) => {
  const t = useContext(MyText);
  console.log(t);
  const [a, setA] = useState(t);
  const t2 = useRecoilValue(MyText2);
  const [t3, setT3] = useRecoilState(MyText2);

  return (
    <>
      <div>
        나는 리코일중에서 유즈리코일 스테이트야 : {t3.text}
        <button
          onClick={() => {
            setT3({ ...t3, text: "변했다" });
          }}
        >
          누르면 변해
        </button>
      </div>
      <div>나는 리코일중에서 유즈리코일 벨류야 : {t2.text}</div>
      <div>나는 컨텍스트야 : {t}</div>

      <Message value={value} />
    </>
  );
};

function Message({ value }) {
  return <div>전달받은 데이터 :{value}</div>;
}

export default MyApp;
