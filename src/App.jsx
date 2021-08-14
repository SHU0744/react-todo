// React17のアップデートにより、jsxを記入するだけの場合は下記のimportは不要になった。
import React from "react";

// コンポーネント（jsx基本 jsの中にhtml5を記入）
const App = () => {
  return (
    // 一つのタグに必ずすること
    //React.Fragmentはdom上ではタグとして認識されない。divを生成したくないときに使用
    <React.Fragment>
      <h1>これがjsx基本です</h1>
      <p>一つのタグの中にすること</p>
    </React.Fragment>
  );
};

// 上記のコンポーネントをexport
export default App;
