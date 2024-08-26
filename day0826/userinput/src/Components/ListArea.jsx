import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import listSwitch from "./ToggleAtom";
import { Button } from "@mui/material";
import Modal from "react-modal";

const ListArea = () => {
  const [userData, setUserData] = useState(
    () => JSON.parse(localStorage.getItem("userList")) || []
  );
  const [modalSwitch, setModalSwitch] = useState(false);
  const listToggle = useRecoilValue(listSwitch);

  useEffect(() => {
    // 리스트가 변경될 때마다 로컬 스토리지에서 사용자 데이터를 가져옴
    setUserData(JSON.parse(localStorage.getItem("userList")) || []);
  }, [listToggle]);

  const handleDelete = (idx) => {
    const updatedUserData = userData.filter((_, index) => index !== idx);
    setUserData(updatedUserData);
    localStorage.setItem("userList", JSON.stringify(updatedUserData)); // 로컬 스토리지 업데이트
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
                    <Button
                      sx={{ color: "grey" }}
                      onClick={() => {
                        setModalSwitch((prev) => !prev);
                      }}
                    >
                      수정
                    </Button>
                    <Button
                      sx={{ color: "grey" }}
                      onClick={() => handleDelete(idx)} // 삭제 버튼 클릭 시 handleDelete 호출
                    >
                      삭제
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Modal isOpen={modalSwitch} onRequestClose={() => setModalSwitch(false)} style={customStyles}>
      나 오혜령인데 바보다?
          </Modal>
    </Wrap>
  );
};

export default ListArea;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  margin: 50px 0px 0px 15px;
`;

const customStyles = {
  content: {
    width: "300px", // 원하는 너비 설정
    height: "300px",
    margin: "auto", // 중앙 정렬
  },
};
