/* eslint react-hooks/exhaustive-deps:off*/
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import ColorfulMessage2 from "./components/ColorfulMessage2";
// コンポーネント（jsx基本 jsの中にhtml5を記入）
// コンポーネント名は必ず先頭を大文字から初める。
const App = () => {
  //  state（状態） ([初期値のstate変数、stateを更新する変数] )
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  // 関数
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // useEffect　　 第二引数に指定した変数が変化したときだけ処理が走る。
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // ｜｜は左がfalseだったら、右を確かめる仕組み
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // ＆＆は左がtureだったら右側を確かめる
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    // 一つのタグに必ずすること
    //React.Fragmentはdom上ではタグとして認識されない。divを生成したくないときに使用
    <React.Fragment>
      <h1 style={{ color: "red" }}>これがjsx基本です</h1>
      <ColorfulMessage color="blue" message="propsを渡す" />
      <ColorfulMessage2 color="pink">違う方法で要素を渡す</ColorfulMessage2>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickShowFlag}>on/of</button>
      <p>{num}</p>
      {faceShowFlag && <p>)^o^(</p>}
    </React.Fragment>
  );
};

// 上記のコンポーネントをexport
export default App;
