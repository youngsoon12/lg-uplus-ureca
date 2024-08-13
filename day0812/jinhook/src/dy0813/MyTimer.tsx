import { useState, useEffect } from "react";

interface aa {
  name: string;
  age: number;
  address: string;
}

const MyTimer = () => {
  const [timer, setTimer] = useState<number>(3);

  const myTimer = () => {
    setTimer(timer - 1);
  };

  useEffect(() => {
    const tid = setInterval(myTimer, 1000);
    if (timer <= 0) {
      clearInterval(tid);
    }
    return () => clearInterval(tid);
  }, [timer]);
  return (
    <div>
      <h3>Timer:{timer}</h3>
    </div>
  );
};

export default MyTimer;
