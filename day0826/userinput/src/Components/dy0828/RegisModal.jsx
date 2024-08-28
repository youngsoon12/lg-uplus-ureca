import React from "react";
import { Modal, Box, Typography, Button, Input } from "@mui/material";
import { useState } from 'react';
import axios from "axios";
function BasicModal({ open, handleClose }) {

  const [registUser, setRegistUser] = useState({
    id: "",
    pwd: "",
    name: "",
  })

  const onChange = (e) => {
    setRegistUser({
     ...registUser,
      [e.target.name]: e.target.value,
    });
    console.log(registUser);
  }

  const onClick = async () => {
    try {
      const response = await axios.post("http://localhost:8080/person/form2", registUser);
      alert("회원가입이 완료되었습니다.");
      console.log(response.data); 
    } catch (error) {
      alert("회원가입에 실패하였습니다.");
      console.error("Error:", error); // 오류 처리
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          회원가입
        </Typography>

        <Typography id="modal-description" sx={{ mt: 2 }} component="div">
          {" "}
          <form onSubmit={(e) => e.preventDefault()}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              <Input placeholder="아이디" autoComplete="new-id" name="id" onChange={onChange} />
              <Input
                placeholder="비밀번호"
                type="password"
                autoComplete="new-password"
                name="pwd"
                onChange={onChange}
              />
              <Input
                placeholder="이름"
                type="text"
                autoComplete="new-name"
                name="name"
                onChange={onChange}
              />
              <Button variant="contained" color="primary" onClick={onClick}>
                가입
              </Button>
              <Button onClick={handleClose} variant="contained">
                취소
              </Button>
            </div>
          </form>
        </Typography>
      </Box>
    </Modal>
  );
}

// Modal 내의 Box 스타일링
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default BasicModal;
