import React from "react";

const Button = (props) => {
  const { checkNum, gameDone, newGame, newGameDisable } = props;
  return (
    <>
      <button onClick={checkNum} disabled={gameDone}>
        정답확인
      </button>
      <button onClick={newGame} disabled={newGameDisable}>
        새게임
      </button>
    </>
  );
};

export default Button;
