import React from "react";
import { Input, Button, InputLabel } from "@mui/material";
import styled from "styled-components";
import RegisModal from "./RegisModal";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [user, setUser] = useState({
    id: "",
    pwd:"",
  });
  
  const onLogin = async() => {
      const response = await axios.post("http://localhost:8080/person/login", {
        id: user.id,
        pwd: user.pwd,
      });
  
      if (response.data.includes("로그인 성공")) {
        // 로그인 성공 처리
        alert(response.data);
        navigate("/book");
        sessionStorage.setItem("token", user.id);
      } else {
        // 로그인 실패 처리
        alert(response.data);
      }
  }

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <form>
      <Wrap>
        <InputLabel>아이디</InputLabel>
        <Input
          label="ID"
          type="text"
          variant="filled"
          style={{ marginBottom: "20px", width: "300px" }}
          autoComplete="newId"
          name="id"
          onChange={onChange}
        />
        <InputLabel>패스워드</InputLabel>
        <Input
          label="Password"
          type="password"
          variant="filled"
          style={{ marginBottom: "20px", width: "300px" }}
          autoComplete="newPassword"
          name="pwd"
          onChange={onChange}
        />
        <Button variant="contained" color="primary" style={{ width: "90px" }} onClick={onLogin}>
          로그인
        </Button>
        <Button
          variant="contained"
          onClick={handleOpen}
          color="success"
          style={{ width: "90px", marginTop: "10px" }}
        >
          회원가입
        </Button>

        <RegisModal open={open} handleClose={handleClose} />
      </Wrap>
    </form>
  );
};

export default LoginForm;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: 600px;
  margin: auto;
`;
