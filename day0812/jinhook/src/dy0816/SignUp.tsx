import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //입려된 이름 (알림창) 출력
    alert(`이름:${name}, 성별:${gender}`);
    e.preventDefault();
  };
  const handleChangeGender = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          이름 : <input type="text" value={name} onChange={handleChangeName} />
        </label>
        <br />
        성별
        <select name="" value={gender} onChange={handleChangeGender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
        <button>제출</button>
      </form>
    </div>
  );
};

export default SignUp;
