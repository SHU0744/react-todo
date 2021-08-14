// React17のアップデートにより、jsxを記入するだけの場合は下記のimportは不要になった。
import React from "react";

// コンポーネント（jsx基本 jsの中にhtml5を記入）
// コンポーネント名は必ず先頭を大文字から初める。
const App = () => {
  // 関数
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };

  return (
    // 一つのタグに必ずすること
    //React.Fragmentはdom上ではタグとして認識されない。divを生成したくないときに使用
    <React.Fragment>
      <h1 style={{ color: "red" }}>これがjsx基本です</h1>
      <p style={contentStyle}>一つのタグの中にすること</p>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

// 上記のコンポーネントをexport
export default App;
