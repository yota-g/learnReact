/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  //設定は上の方に設定を行う
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  //stateはuseStateで設定することができる。
  //第一がstateとして変更する変数、２つ目はそれを変更するための関数を入れる。
  //useStateの引数でデフォルトを設定することができる。
  const onClickCountUp = () => {
    setNum(num + 1);
    //setNumを実行する記載をする。setNumの内容を設定すればいい。
  };
  const onClickSwitchShow = () => {
    setFaceShowFlag(!faceShowFlag);
    //値が変わるのが値が再レンダリングされているから。動きがあればAPPの上から順に再度読み込んでいる。
    //Reactは特定の条件の中から(set関数が呼び出された時)コンポーネントを再レンダリングして差分を変更することが可能。
    //再レンダリングできるのは、useStateを変更したもの。propsを受け取っている場合にそのpropsの中身が変わった場合、またその親のコンポが再レンダリングした時も再レンダリングされる。
    //再レンダリングの最適化を行わないといけない。再レンダリングが行われていることを理解する。
  }; //扱う処理が増えてくるとそれぞれに影響し合ってしまうことがある。

  //そうゆうときは関心の分離をしないといけない。useEffectを使用するとnumだけのものに関心を持つようにできる。
  //配列を記載するだけだと最初の一回だけ読み込むようにする　できる。
  useEffect(() => {
    //関数の中に処理をかける。
    // console.log("useEffect");//レンダリング時に通っていることがわかる。
    //関数を持たせるだけだと使えない。第二引数に配列を入れる。配列に変数を入れれたりする。
    //配列を入れると最初だけ読み込まれる。よく使う機能。配列を渡すことで、最初の1回だけ通したい時に使用する。
    //配列にnumを渡すとnumにだけ関心を持つものを作成できる。
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true); //falseの時だけ呼び出されるようにする。
        //setFaceShowFlagを変更するとstateが変更されてしまうのでまた再レンダリングとなって無限レンダリングしてしまう。
        //too many re-rendersが出たらstate周りを確認する必要がある。
        //tureの時はこのtrueを呼ばないようにしたい。
      } else {
        faceShowFlag && setFaceShowFlag(false);
        //trueの時だけ呼び出されるようにしたい。
      }
    }
    // [eslint-disable-next-line react-hooks/exhaustive-deps] []の中を設定すると記載した内容の下の部分だけをeslintをoffにすることができる。
  }, [num]);
  //useEffectを使用するときは、中に使用する変数を全て設定してあげないといけない。
  //中で使用している変数を配列に入れてあげる必要がある。がしかし、今回はfaceShowFlagに関心を持たせたくないので、入れない。
  //場合によってeslintをoffにすることもある。offにすると確認が大切になる。onの時は、eslintで決められたコメントを入れることで対象のファイルの中だけoffにすることができる。

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
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <button onClick={onClickSwitchShow}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
    // faceShowFlagがtrueの時にその次のものを返してくれるのでそれを設定することができる。
  );
};
//jsxの中でのhtmlのタグの中ではキャメルケースつなぎ目が大文字で記載する。
//cssのスタイルも当てることができる。　オブジェクトとしてcssを記載することができる。
//valueは文字列で記載。  本来ならfont-sizeとなるが、jsxはfontSizeとキャメルケースで記載しないといけない。
//直接書き込むこともできるし、cssをインポートもしても使用できる。

//propsは、コンポーネントに対して、渡す引数のようなもの。
//動的にコンポーネントを使用できるようにできる。
export default App;
