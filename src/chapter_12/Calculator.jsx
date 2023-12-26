import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingBerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) {
    return ((fahrenheit -32) * 5 ) / 9 ;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) { // 온도와 변환 종류 선택 해서 변환을 실행
    const input = parseFloat(temperature);  // 화씨가 소수점 이하 값을 나타내기 위해 parseFloat 실수형으로 변환
    if (Number.isNaN(input)) {              // 입력값이 숫자인지 확인해서 숫자가 아니면 빈공백 출력
        return "";
    }
    const output = convert(input);          // 입력값이 output으로 저장
    const rounded = Math.round(output * 1000) / 1000;  // 출력된 output을 소수점 한자리까지 표현
    return rounded.toString();  // 정수로 값을 리턴
}

function Calculator(props) {  // 온도 계산
    const [temperature, setTemperature] = useState("");  // 입력받은 온도값 저장
    const [scale, setScale] = useState("c");  //  입력받은 온도 종류 저장

    const handleCelsiusChange = (temperature) => {  // 섭씨 온도 입력시
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {  // 화씨 온도 입력시
        setTemperature(temperature);
        setScale("f");
    };

    const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;  // 화씨로 입력되었다면 섭씨로 변환하여 입력
    const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;  // 섭씨로 입력되었다면 화씨로 변환하여 입력

    return (
        <div>
            <TemperatureInput                               //섭씨 입력 받는 부분
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput                               //화씨 입력 받는 부분
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingBerdict celsius={parseFloat(celsius)}/>  
        </div>
    );
}

export default Calculator;