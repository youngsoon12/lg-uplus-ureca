import { createContext } from 'react';

const ThemeContext = createContext<any>(null); // 공유 공간만들기 !! => 이름 부여
ThemeContext.displayName = "테마Context" // 개발자 도구에서 식별이름

export default ThemeContext;