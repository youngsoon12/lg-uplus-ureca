import React from "react";

const Input = (props) => {
  const { tryCount, user_num, handleChange, handleKeyDown } = props;
  return (
    <>
      <p>{tryCount}번째 시도</p>
      <input
        type="number"
        min="1"
        max="100"
        value={user_num}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default Input;
