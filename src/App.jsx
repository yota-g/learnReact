import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
//jsxの中でのhtmlのタグの中ではキャメルケースつなぎ目が大文字で記載する。
//cssのスタイルも当てることができる。　オブジェクトとしてcssを記載することができる。
//valueは文字列で記載。  本来ならfont-sizeとなるが、jsxはfontSizeとキャメルケースで記載しないといけない。
//直接書き込むこともできるし、cssをインポートもしても使用できる。
export default App;
