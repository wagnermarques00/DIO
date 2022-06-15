import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import "./styles.css";

function soma(a, b) {
    alert(a + b);
}

function App() {
    return (
        <div>
            <h1>Hello, world!</h1>
            <Button onClick={() => soma(10, 20)} name="Soma 1" />
            <ComponentA>
                <ComponentB>
                    <Button onClick={() => soma(40, 20)} name="Soma 2" />
                </ComponentB>
            </ComponentA>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
