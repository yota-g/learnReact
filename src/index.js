import React from "react";
//componentをhtmlに反映させる為にreact-domをimportする。
import ReactDom from "react-dom";

//アロー関数でコンポーネントを返していく
const App = () => {
  //JSX記法で記載をしていく。jsのreturnの中でhtmlを描いていくのをjsx記法という。
  //returnの内容が複数になる場合は、()で返却する必要がある。JSX記法は１つのタグで記載しないといけない。　なので１つのタグで囲む必要がある。
  return (
    // <div>
    //   <h1>こんにちは！</h1>
    //   <p>お元気ですか？</p>
    // </div>
    //errorを回避する為にdivで無駄に囲んでいる。不要なものを排除するにはimport　ReactのFragmentを使うとhtmlに無駄に表示されない。
    // <React.Fragment>
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
    //</React.Fragment>
    //Fragmentで囲むと画面には何も表示されず、errorを回避する為に使用できる。
    //Fragmentを省略して　<>で記載することができる。
  );
};

//Appを画面に反映させる。
ReactDom.render(<App />, document.getElementById("root"));
//id = rootに　APPのコンポーネントを反映させることができる。
