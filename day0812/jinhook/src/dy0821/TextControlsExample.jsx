import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { useEffect,useState } from 'react';
let a = 4;
const TextControlsExample = () => {
    const [time, setTime] = useState('');
    const [b, setB] = useState(0);
    useEffect(() => {
        
    },[])
    return (
      <>
        <style type="text/css">
          {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
        </style>
        <Button variant="flat" size="xxl">
                flat button
            </Button>
            <h1>{b}</h1>
            <h1>{a}</h1>
            <button onClick={() => {setB(b+1)}}>b증가</button>
            <button onClick={() => { a++; }}>a증가</button>
      </>
    );
};

export default TextControlsExample;