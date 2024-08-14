// LandingPage.tsx
import { useState } from 'react';
import Toolbar from "./Toolbar";

const LandingPage = (props: any) => {
    //상태관리
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //로그인 콜백
    const onClickLogin = () => {
        setIsLoggedIn(true); //로그인으로 상태변경
        //로그아웃 콜백
        const onClickLogout = () => {
            setIsLoggedIn(false); // 로그아웃으로 상태변경
        }
        return (
            <div>
                <Toolbar />
                <div>경원님 졸업축하해요 !!</div>
            </div>
        )
    }
}
export default LandingPage;