// React17のアップデートにより、jsxを記入するだけの場合は下記のimportは不要になった。
import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import ColorfulMessage2 from "./components/ColorfulMessage2";
// コンポーネント（jsx基本 jsの中にhtml5を記入）
// コンポーネント名は必ず先頭を大文字から初める。
const App = () => {
  // 関数
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  //  state（状態） ([初期値のstate変数、stateを更新する変数] )
  const [num, setNum] = useState(0);
  return (
    // 一つのタグに必ずすること
    //React.Fragmentはdom上ではタグとして認識されない。divを生成したくないときに使用
    <React.Fragment>
      <h1 style={{ color: "red" }}>これがjsx基本です</h1>
      <ColorfulMessage color="blue" message="propsを渡す" />
      <ColorfulMessage2 color="pink">違う方法で要素を渡す</ColorfulMessage2>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </React.Fragment>
  );
};

// 上記のコンポーネントをexport
export default App;
