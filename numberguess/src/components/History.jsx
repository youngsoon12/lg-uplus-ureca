import React from "react";

const History = (props) => {
  const { tryHistory } = props;
  return (
    <div>
      <ul>
        {tryHistory.map((h, idx) => (
          <li key={idx}>{h}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
