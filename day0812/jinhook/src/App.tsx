import React from "react";
import Counter2 from "./dy0812/Counter2";
import TextInputWithFocusButton from './dy0812/TextInputWithFocusButton';
import Accommodate from './dy0812/Accommodate';
import MyMemo from "./dy0813/MyMemo";
import MyTimer from "./dy0813/MyTimer";
import MyToggle from "./dy0813/MyToggle";
import CheckBtn from "./dy0813/CheckBtn";
import NumberGame from "./dy0813/NumberGame";
import LoginControl from "./dy0814/LoginControl";
import AttendanceBook from "./dy0816/AttendanceBook";
import SignUp from "./dy0816/SignUp";
import MyNumberGuess3 from "./dy0816/MyNumberGuess3";
import Context from "./dy0819/Context";
import { CountContext, CountProvider } from "./dy0819/ContextAPI/CountContext";
import A from "./dy0819/A";
import WelcomeDialog from "./dy0819/WelcomeDialog";
import MyApp from "./dy0820/MyApp";
import MyButtonCounter from "./dy0820/MyButtonCounter";
import MyCalc from "./dy0820/MyCalc";
import DarkOrLight from "./dy0821/DarkOrLight";
import GawibawiboGame from "./dy0821/GawibawiboGame";
import CssExam01 from "./dy0821/csstest/CssExam01";
import ButtonApp from "./dy0821/csstest/ButtonApp";
import TextControlsExample from "./dy0821/TextControlsExample";
import RouterApp from "./dy0822/RouterApp";

// Context 생성
function App() {
  return (
    <CountProvider>
      {/* <DarkOrLight> */}
        <div className="App">
          {/* <Counter2 /> */}
          {/* <TextInputWithFocusButton/> */}
          {/* <Accommodate /> */}
          {/* <MyMemo / > */}
          {/* <MyTimer /> */}
          {/* <MyMemo /> */}
          {/* <MyToggle /> */}
          {/* <CheckBtn /> */}
          {/* <NumberGame /> */}
          {/* {<LoginControl  />} */}
          {/* {<AttendanceBook />} */}
          {/* {<SignUp />} */}
          {/* {<MyNumberGuess3 />}/ */}
          {/* <Context /> */}
          {/* <A /> */}
          {/* {<WelcomeDialog />} */}
          {/* <MyApp /> */}
          {/* <MyButtonCounter /> */}
          {/* {<MyCalc />} */}
        {/* <GawibawiboGame /> */}
        {/* <CssExam01/> */}
        {/* <ButtonApp/> */}
        {/* <TextControlsExample /> */}
        <RouterApp/>
        </div>
      {/* </DarkOrLight> */}
    </CountProvider>
  );
}

export default App;
