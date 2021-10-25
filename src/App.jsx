import React from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  const onClickButton = () => alert();
  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "18px"
  // };
  // const contentLadyStyle = {
  //   color: 'pink',
  //   fontSize: '18px'
  // }
  //毎回同じような設定をするのはめんどくさい。
  //色と文章をpropsとして設定して使用できるようにする。
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* <p style={contentStyle}>お元気ですか？</p> */}
      {/* <ColorfullMessage color="blue" message="お元気ですか？"/> */}
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      {/* タグで囲んだメッセージを表示するようにもできる。 */}
      {/* propsを渡すときは渡す方と渡される側に変更が必要。　 */}
      {/* 渡す方は、タグの中にpropsとして渡したい名称を記載する。名称は任意。
      その名称　= の後に渡す内容を入れていくことができる。compoに対して、要素を渡すことで、compoにpropsを渡すことができる。*/}
      {/* <ColorfullMessage color="pink" message="元気です。"/> */}
      <ColorfullMessage color="pink">元気です。</ColorfullMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
//jsxの中でのhtmlのタグの中ではキャメルケースつなぎ目が大文字で記載する。
//cssのスタイルも当てることができる。　オブジェクトとしてcssを記載することができる。
//valueは文字列で記載。  本来ならfont-sizeとなるが、jsxはfontSizeとキャメルケースで記載しないといけない。
//直接書き込むこともできるし、cssをインポートもしても使用できる。

//propsは、コンポーネントに対して、渡す引数のようなもの。
//動的にコンポーネントを使用できるようにできる。
export default App;
//通常のexportだと分割代入になる。複数importできる。
//export defaultはimportするときそれしかimportできない。
//
