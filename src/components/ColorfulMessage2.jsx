// React17のアップデートにより、jsxを記入するだけの場合は下記のimportは不要になった。
import React from "react";

//親からpropsの値渡される。
const ColorfulMessage2 = (props) => {
  // console.log(props)
  // 分割代入を使用しても良い
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "20px"
  };

  return <p style={contentStyle}>{children}</p>;
};

// 上記のコンポーネントをexport
export default ColorfulMessage2;
