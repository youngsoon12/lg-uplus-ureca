import * as React from 'react';
import useCounter from './useCounter';
import { useState, useEffect } from 'react';

//Accommodate (입장하는 인원을 수용하는 컴포넌트)
const MAX_CAPACITY:number = 10;

const Accommodate = (props: any) => {
    const [isFull, setIsFull] = useState(false);//수용인원 풀 상태 state
    const [count, increaseCount, decreaseCount] : any = useCounter(0);

    useEffect(() => {
        console.log("================================");
        console.log('useEffect() is called');
        console.log(`isFull : ${isFull}`);
    })

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY); //수용인원 초과
        console.log('현재 카운트: ',count);
    },[count])
    return ( 
        <div style={{padding:16}}>
        </div>
     );
}
 
export default Accommodate;