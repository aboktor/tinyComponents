import React from "react";
import * as ReactDom from "react-dom";
export default function run(div: HTMLDivElement) {
  ReactDom.render(<Component text="Hello World" />, div);
}

function Component(props: { text: string }) {
  return <div>{props.text}</div>;
}
