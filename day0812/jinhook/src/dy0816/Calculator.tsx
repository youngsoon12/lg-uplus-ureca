//Calculator.jsx

// import TemperatureInputCelsius from "./TemperatureInputCelsius";
// import TemperatureInputFahrenheit from "./TemperatureInputFahrenheit";
import TemperatureInput from "./TemperatureInput";
import { useState } from "react";

function Calculator(props: any) {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c"); //기본값 섭씨

  //화씨 ==> 섭씨 변환
  function toCelsius(fahrenheit: any) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  //섭씨 ==> 화씨 변환
  function toFahrenheit(celsius: any) {
    return (celsius * 9) / 5 + 32;
  }

  function tryConvert(temperatur: any, convert: any) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  const handleCelsiusChange = (temperature: any) => {
    setTemperature(temperature);
    setScale("c");
  };

  const handleFahrenheitChange = (temperature: any) => {
    setTemperature(temperature);
    setScale("f");
  };

  const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      {/* <TemperatureInputCelsius/>
            <TemperatureInputFahrenheit/> */}
      <TemperatureInput scale="c" onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale="f" onTemperatureChange={handleFahrenheitChange} />
    </div>
  );
}

export default Calculator;
