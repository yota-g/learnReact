import React from "react";

const ColorfullMessage = (props) => {
  //変数を指定することでpropsを受け取ることができる・
  // console.log(props);
  //objとして渡ってきていることが確認できる。
  //分割代入で煩雑なprops...のものをなくすことができる。
  const { color, children } = props;
  const contentStyle = {
    // color: props.color,
    // color: color, color:colorなので省略可能。
    color,
    fontSize: "18px"
  };

  return (
    // <p style={contentStyle}>{props.message}</p>
    // <p style={contentStyle}>{props.children}</p>
    <p style={contentStyle}>{children}</p>
    // タグの中に記載したものをpropsで渡すことができる。
    //propsで直接渡すこともできる。childrenとしても渡せる。
  );
};
//このままだと決まったものしか表示されないのでpropsを使用して変更を加える。

export default ColorfullMessage;
