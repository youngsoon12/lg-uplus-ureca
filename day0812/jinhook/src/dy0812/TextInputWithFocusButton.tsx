import { useRef } from "react";

const TextInputWithFocusButton = () => {
    const inputElem = useRef<HTMLInputElement | null>(null);
    const onButtonClick = () => { 
if (inputElem.current) {
            inputElem.current.focus();
        }
        console.log(inputElem.current?.value);
    };

    return (
        <>
            <input type="text" ref={inputElem} />
            <button onClick={onButtonClick}>입력 포커스</button>
        </>
  );
};

export default TextInputWithFocusButton;    