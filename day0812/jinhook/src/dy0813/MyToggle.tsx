import { useCallback, useState } from "react";

const MyToggle = () => {
  let [isToggleOn, setIsToggleOn] = useState<boolean>(true);
  const [a, setA] = useState<number>(0);
  const handleClick = useCallback(() => {
    setIsToggleOn((prev) => !prev);
  }, []);
  const ddarkak = () => {
    isToggleOn = true;
  };

  return (
    <>
      <button onClick={ddarkak}>딸칵</button>
      <div>딸칵 : {a}</div>

      <div>
        {isToggleOn ? (
          <button style={{ width: "500px", height: "500px" }} onClick={handleClick}>
            켜짐
          </button>
        ) : (
          <button
            style={{ width: "500px", height: "500px", fontSize: "50px" }}
            onClick={handleClick}
          >
            꺼짐
          </button>
        )}
      </div>
    </>
  );
};
export default MyToggle;
