import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Input,
} from "@mui/material";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import listSwitch from "./ToggleAtom";
import Modal from "react-modal";
import { EditBtn } from "./InputBtn";
import axios from "axios";

const users = [
  { label: "이름", name: "name" },
  { label: "나이", name: "age" },
  { label: "직업", name: "job" },
];

const ListArea = () => {
  const [dbData, setDbData] = useState([]);
  const [modalSwitch, setModalSwitch] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [editData, setEditData] = useState({ name: "", age: "", job: "" });
  const listToggle = useRecoilValue(listSwitch);

  useEffect(() => {
    axios.get("http://localhost:8080/person/list").then((res) => {
      setDbData(res.data);
    });
  }, [listToggle]);

  const handleDelete = async (idx) => {
    try {
      const idToDelete = dbData[idx].no; // 삭제할 ID 가져오기
      // 삭제 요청 보내기
      await axios.delete(`http://localhost:8080/person/delete?no=${idToDelete}`);

      // 삭제 후 UI 업데이트
      const updatedData = dbData.filter((_, index) => index !== idx);
      setDbData(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error.response?.data || error.message);
    }
  };

  const handleEditClick = (idx) => {
    setCurrentEditIndex(idx);
    setEditData({ ...dbData[idx] }); // Edit Data 초기화
    setModalSwitch(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const closeModal = async () => {
    try {
      await axios.put(`http://localhost:8080/person/upform?no=${editData.no}`, editData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const updatedData = [...dbData];
      updatedData[currentEditIndex] = editData;
      setDbData(updatedData);
      setModalSwitch(false);
      setCurrentEditIndex(null);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <Wrap>
      {listToggle.toggle && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>나이</TableCell>
                <TableCell>직업</TableCell>
                <TableCell style={{ paddingLeft: "70px" }}>상태</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dbData.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.job}</TableCell>
                  <TableCell>
                    <Button sx={{ color: "grey" }} onClick={() => handleEditClick(idx)}>
                      수정
                    </Button>
                    <Button sx={{ color: "grey" }} onClick={() => handleDelete(idx)}>
                      삭제
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Modal
        isOpen={modalSwitch}
        onRequestClose={() => setModalSwitch(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <InputContainer>
          {users.map(({ label, name }, idx) => (
            <InputArea key={idx}>
              <InputLabel>{label}</InputLabel>
              <Input
                type="text"
                sx={{ width: "200px", fontSize: "16px", padding: "10px 0px 5px 10px" }}
                name={name}
                value={editData[name] || ""}
                onChange={handleInputChange}
              />
            </InputArea>
          ))}
          <EditBtn onClick={closeModal} />
        </InputContainer>
      </Modal>
    </Wrap>
  );
};

export default ListArea;

// Styled components
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  margin: 50px 0px 0px 15px;
`;

const customStyles = {
  content: {
    width: "280px",
    height: "180px",
    margin: "auto",
    padding: "30px",
  },
};

const InputLabel = styled.label`
  margin: 15px;
`;

const InputArea = styled.div`
  margin-right: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 90%;
`;
