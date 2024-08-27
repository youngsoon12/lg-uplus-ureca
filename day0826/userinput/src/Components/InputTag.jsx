import React, { useState, useEffect } from "react";
import { Input } from "@mui/material";
import styled from "styled-components";
import InputBtn, { ListBtn } from "./InputBtn";
import { useRecoilState } from "recoil";
import listSwitch from "./ToggleAtom";
import axios from "axios"; // axios 임포트

const users = [
  { label: "이름", name: "name" },
  { label: "나이", name: "age" },
  { label: "직업", name: "job" },
];

const InputTag = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    job: "",
  });
  const [listToggle, setListToggle] = useRecoilState(listSwitch);
  const [userList, setUserList] = useState(
    () => JSON.parse(localStorage.getItem("userList")) || []
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitClick = async () => {
    console.log(user);
    try {
      // 서버로 POST 요청 보내기
      const response = await axios.post("http://localhost:8080/person/form", user);

      // POST 요청이 성공하면 사용자 데이터를 로컬 스토리지에 저장
      const updatedUserList = [...userList, response.data]; // response.data는 서버에서 반환한 데이터를 가정
      setUserList(updatedUserList);
      localStorage.setItem("userList", JSON.stringify(updatedUserList)); // 사용자 목록을 로컬 스토리지에 저장
      setUser({ name: "", age: "", job: "" });
    } catch (error) {
      console.error("POST 요청 중 오류 발생:", error);
    }
  };
  console.log(user);
  useEffect(() => {
    setListToggle({ ...listToggle, update: listToggle.update });
  }, [userList]);

  const listShowClick = () => {
    setListToggle({ ...listToggle, toggle: !listToggle.toggle });
  };

  return (
    <>
      {users.map(({ label, name }, idx) => (
        <InputArea key={idx}>
          <InputLabel>{label}</InputLabel>
          <Input
            type="text"
            sx={{ width: "200px", fontSize: "16px", padding: "10px 0px 5px 10px" }}
            name={name}
            onChange={handleChange}
            value={user[name]}
          />
        </InputArea>
      ))}
      <ButtonArea>
        <InputBtn onClick={submitClick} />
        <Separator>|</Separator>
        <ListBtn onClick={listShowClick} />
        <Separator>{listToggle.toggle ? <>show</> : <>close</>}</Separator>
      </ButtonArea>
    </>
  );
};

export default InputTag;

const InputLabel = styled.label`
  margin: 15px;
`;
const InputArea = styled.div`
  margin-right: 20px;
`;

const ButtonArea = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center; /* 버튼을 수직으로 가운데 정렬 */
  justify-content: center;
`;

const Separator = styled.span`
  margin: 0 10px;
  margin-top: 15px;
  font-weight: 100;
`;
