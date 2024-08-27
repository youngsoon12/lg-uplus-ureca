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

const users = [
  { label: "이름", name: "name" },
  { label: "나이", name: "age" },
  { label: "직업", name: "job" },
];

const ListArea = () => {
  const [userData, setUserData] = useState(
    () => JSON.parse(localStorage.getItem("userList")) || []
  );
  const [modalSwitch, setModalSwitch] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const listToggle = useRecoilValue(listSwitch);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userList")) || []);
  }, [listToggle]);

  const handleDelete = (idx) => {
    const updatedUserData = userData.filter((_, index) => index !== idx);
    setUserData(updatedUserData);
    localStorage.setItem("userList", JSON.stringify(updatedUserData));
  };

  const handleEditClick = (idx) => {
    // 모달이 이미 열려있다면 종료
    if (modalSwitch && currentEditIndex === idx) {
      return;
    }

    setCurrentEditIndex(idx);
    setModalSwitch(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => {
      const newData = [...prevData];
      newData[currentEditIndex][name] = value;
      localStorage.setItem("userList", JSON.stringify(newData));
      return newData;
    });
  };

  const closeModal = () => {
    setModalSwitch(false);
    setCurrentEditIndex(null);
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
              {userData.map((row, idx) => (
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
        onRequestClose={closeModal}
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
                value={currentEditIndex !== null ? userData[currentEditIndex][name] : ""}
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
    width: "300px",
    height: "300px",
    margin: "auto",
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
