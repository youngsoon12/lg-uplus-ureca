import React from "react";
import { useState } from "react";

interface ButtonProps {
  onClick: () => void;
}

const LoginButton: React.FC<ButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>로그인</button>;
};

const LogOutButton: React.FC<ButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>로그아웃</button>;
};

const LoginControl: React.FC = (childeren) => {
  console.log(JSON.stringify(childeren));
  //로그인 콜백
  const handleLoginClick = () => {
    setLoggedIn(true);
  };
  const handleLogoutClick = () => {
    setLoggedIn(false);
  };
  //로그아웃 콜백
  //엘리먼트 변수 : 렌더링해야 될 컴포넌트를 변수처럼 사용
  const [isLoggedIn, setLoggedIn] = useState(false);

  let button;
  if (isLoggedIn) {
    button = <LogOutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }
  return <div>{button}</div>;
};

export default LoginControl;
