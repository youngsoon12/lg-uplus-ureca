// MyButtonCounter.tsx
import { createContext, useState, useContext } from "react";

const CountContext = createContext<any>(null);

export const CountProvider = (props: any) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => (prev || 0) + 1);
  };
  return <CountContext.Provider value={[count, setCount]}>{props.children}</CountContext.Provider>;
};

const MyButtonCounter = () => {
  return (
    <CountProvider>
      <NumberShow />
      <Buttons />
    </CountProvider>
  );
};

// 버튼(액션) 컴포넌트
function Buttons() {
  const [, setCount] = useContext(CountContext);
  const increase = () => setCount((prev: any) => prev + 1);
  const decrease = () => setCount((prev: any) => prev - 1);
  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

// 앱 컴포넌트
function NumberShow() {
  const [count] = useContext(CountContext);
  return <div>Current Number: {count}</div>;
}

export default MyButtonCounter;
