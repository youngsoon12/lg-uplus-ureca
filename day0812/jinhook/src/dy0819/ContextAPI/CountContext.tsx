import React, { createContext, useState, ReactNode } from "react";

// Context를 생성합니다.
export const CountContext = createContext<any>(undefined);

// Provider 컴포넌트를 정의합니다.
export const CountProvider = ({ children }: { children: ReactNode }) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount((prev) => (prev || 0) + 1);
    };

   return <CountContext.Provider value={{ count, increment }}>{children}</CountContext.Provider>;
};
