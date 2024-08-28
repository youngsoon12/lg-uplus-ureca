import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Input, InputLabel, Button,TextField } from '@mui/material';

const BookPage = () => {
    const navigate = useNavigate();
    const [bookInfo, setBookInfo] = useState({
        isbn:"",
        title: "",
        author: "",
        price: "",
        des: "",
    })

    const onChange = (e) => {
        setBookInfo({...bookInfo, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if(!sessionStorage.getItem("token")){
            navigate("/");  
        }  
    },[])
    return (
      <Wrap>
        <InputLabel>통관번호</InputLabel>
        <Input
          variant="filled"
          style={{ marginBottom: "20px", width: "300px" }}
          name="isbn"
          onChange={onChange}
        />
        <InputLabel>책 제목</InputLabel>
        <Input
          variant="filled"
          style={{ marginBottom: "20px", width: "300px" }}
          name="title"
          onChange={onChange}
        />
        <InputLabel>작가</InputLabel>
        <Input
          variant="filled"
          style={{ marginBottom: "20px", width: "300px" }}
          name="author"
          onChange={onChange}
        />
        <InputLabel>가격</InputLabel>
        <Input
          variant="filled"
          style={{ marginBottom: "20px", width: "300px" }}
          name="des"
          onChange={onChange}
        />
        <InputLabel>설명</InputLabel>
        <TextField
          label="내용"
          multiline
          rows={4}
          variant="outlined"
          style={{ marginBottom: "20px", width: "300px" }}
        />
        <Button variant="contained" color="primary" style={{ width: "90px" }}>
          등록
        </Button>
      </Wrap>
    );
};

export default BookPage;


const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: 600px;
  margin: auto;
`;