import React, { useContext} from "react";
import { CountContext } from "./ContextAPI/CountContext";

const Context = () => {
  const { count, increment } = useContext(CountContext);

  return (
    <div>
      {count}
      <button onClick={increment}>버튼</button>
    </div>
  );
};

export default Context;
