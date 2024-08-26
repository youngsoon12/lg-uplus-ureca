import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import InputTag from "../Components/InputTag";
import ListArea from "../Components/ListArea";
import { RecoilRoot } from "recoil";

const Main = () => {
  const [userList, setUserList] = useState(
    () => JSON.parse(localStorage.getItem("userList")) || []
  );

    useEffect(() => {
      localStorage.clear(); // localStorage 초기화
      setUserList([]); // userList 상태도 초기화
    }, []); 
    
  useEffect(() => {
      localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);

  return (
    <RecoilRoot>
      <Wrap>
        <TitleArea>사람정보입력</TitleArea>
        <InputTag userList={userList} setUserList={setUserList} />
        <ListArea userList={userList} setUserList={setUserList} />
      </Wrap>
    </RecoilRoot>
  );
};

export default Main;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleArea = styled.h2`
  width: 100vw;
  padding-top: 20px;
  text-align: center;
`;
