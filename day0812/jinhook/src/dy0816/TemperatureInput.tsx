// TemperatureInput.jsx
const scaleNames: any = {
  c: "섭씨",
  f: "화씨",
};

function TemperatureInput(props: any) {
  // const [temperature, setTemperature] = useState("");
  // ==> 부모컴포넌트에서 state관리

  const handleChange = (event: any) => {
    //setTemperature(event.target.value);
    //==> 부모컴포넌트에서 state변경
    props.onTemperatureChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>온도를 입력해주세요(단위:{scaleNames[props.scale]}):</legend>
      <input type="text" value={12} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;
