import { useState } from "react";

const CheckBtn = (): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(true);
  const onClick = () => {
    setChecked((prev) => !prev);
    console.log(checked);
  };
  return (
    <div>
      {checked ? (
        <div>
          <button onClick={onClick}>확인</button>
        </div>
      ) : (
        <div>
          <button onClick={onClick} disabled={true}>
            확인해주세요
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckBtn;
