import { useEffect, useState } from "react";

const Counter2: React.FC = (props: any) => {
  // let cnt: number = 0;
  let [cnt, SetCnt] = useState<number>(0);

  useEffect(() => {
    document.title = `이펙트 클릭 - ${cnt}번`;
  }, [cnt]);
  return (
    <div>
      <p>총 {cnt} 번 클릭하였습니다.</p>
      <button
        onClick={() => {
          SetCnt(cnt + 1);
        }}
      >
        버튼
      </button>
      <button onClick={() => { SetCnt(cnt + 1) }}></button>
    </div>
  );
};

export default Counter2;
