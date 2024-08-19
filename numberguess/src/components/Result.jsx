import React from "react";

const Result = (props) => {
  const { tryHistory, result } = props;
  return <div>{tryHistory.length > 0 && <> 확인결과▶ {result} </>}</div>;
};

export default Result;
