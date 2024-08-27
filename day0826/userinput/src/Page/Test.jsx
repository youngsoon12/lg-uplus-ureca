import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/person/list");
        setData(response.data); // 응답 데이터를 상태에 저장
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error); // 에러 상태에 저장
      }
    };

    fetchData();
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행

  // 에러가 발생한 경우 메시지를 표시
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // 데이터가 로드되지 않은 경우 로딩 메시지 표시
  if (!data.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((person, idx) => (
        <div key={idx + 100000}>
          <span key={idx} style={{ margin: "20px" }}>
            {person.name}
          </span>
          <span key={idx + 100} style={{ margin: "20px" }}>
            {person.age}
          </span>
          <span key={idx + 1000} style={{ margin: "20px" }}>
            {person.job}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Test;
