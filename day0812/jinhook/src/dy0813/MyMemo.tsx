// MyMemo.tsx
import { InputHTMLAttributes, useState } from "react";

const MyMemo = () => {
  const [memoContent, setMemoContent] = useState("");
  const [memoContents, setMemoContents] = useState<string[]>([]);
  const myCallback = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemoContent(event.target.value);
  };

  const myClickCallback = () => {};
  return (
    <div>
      <h1>마이 메모장</h1>
      <div>
        <h2>메모 Form</h2>
        <input type="text" onChange={myCallback} value={memoContent} />
        <button>메모등록</button>
      </div>
      <hr />
    </div>
  );
};
export default MyMemo;
