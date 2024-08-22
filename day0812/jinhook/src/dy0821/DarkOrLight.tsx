/*
DarkOrLight ==> 루트 컴포넌트 (App)
MainContent ==> 내용출력 컴포넌트
ThemeContext ==> 테마 컴포넌트
*/

import {useCallback, useState} from 'react';
import MainContent from './MainContent';
import ThemeContext from './ThemeContext';

const DarkOrLight = (props: any) => {
    // 테마 상태 관리
    const [theme, setTheme] = useState("light");

    // 테마의 값 변경에 따라 토글하는 콜백 정의
    const toggleTheme = useCallback(() => {
        if (theme === 'light') {
            setTheme('dark');
        } else { 
            setTheme('light');
        }

    },[theme])
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <MainContent />
        </ThemeContext.Provider>
    );
};

export default DarkOrLight;