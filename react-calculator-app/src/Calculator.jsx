import React, { useState } from "react";

export const Calculator = () => {
  const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"];

  const [display, setDisplay] = useState("");

  const handleClick = (btn) => {
    if (btn === "C") {
      setDisplay("");
    } else if (btn === "=") {
      calculator(display);
    } else {
      setDisplay((display) => display + btn);
    }
  };

  const calculator = (expression) => {
    // 「整数 演算子 整数」の形式のみ許可
    const validExpression = /^(\d+)([+\-*/])(\d+)$/;

    // 有効な式であるかチェック
    const match = expression.match(validExpression);
    if (!match) {
      setDisplay("エラー");
      throw new Error("無効な式です。");
    }
    const num1 = Number(match[1]); // 1つ目の整数
    const operator = match[2]; // 演算子
    const num2 = Number(match[3]); // 2つ目の整数

    const result = calculation(num1, operator, num2);
    setDisplay(result);
  };

  const calculation = (num1, operator, num2) => {
    const operations = {
      "+": (x, y) => x + y,
      "-": (x, y) => x - y,
      "*": (x, y) => x * y,
      "/": (x, y) => x / y,
    };
    return operations[operator](num1, num2);
  };

  return (
    <>
      <h2>電卓アプリ</h2>
      <div className="wrapper">
        <div className="calculator-container">{display}</div>
        <div className="button-grid">
          {buttons.map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
