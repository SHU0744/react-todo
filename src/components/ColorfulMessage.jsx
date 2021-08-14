// React17のアップデートにより、jsxを記入するだけの場合は下記のimportは不要になった。
import React from "react";

//親からpropsの値渡される。
const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "20px"
  };

  return <p style={contentStyle}>{props.message}</p>;
};

// 上記のコンポーネントをexport
export default ColorfulMessage;
