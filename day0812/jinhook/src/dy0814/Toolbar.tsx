// 툴바 구성1) 로그인 여부 : 환영합니다.
// ==> 인라인 if
// ==> Boolean && expression

// 툴바 구성2) 로그인 여부 : 로그아웃 or 로그인 ==> 인라인 if~else
// 조건식 ? trueExpression : falseExpression

import React, { useState } from "react";

const Toolbar = (props: any) => {
    const {isLoggedIn, onClickLogin, onClickLogout} = props;
    return (
      <div>
        {isLoggedIn && <span>환영합니다!</span>}
        {isLoggedIn ? (
          <button onClick={onClickLogin}>로그아웃</button>
        ) : (
          <button onClick={onClickLogout}>로그인</button>
        )}
      </div>
    );
};

export default Toolbar;
