// React17のアップデートにより、jsxを記入するだけの場合は下記のimportは不要になった。
import React from "react";
// htmlにコンポートネンを反映させるために下記のimportは必要
import ReactDom from "react-dom";
// コンポーネントファイルをimport
import App from "./App";

// index.htmlのrootの部分にAppコンポーネントをレンダリング
ReactDom.render(<App />, document.getElementById("root"));
