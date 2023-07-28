import React from 'react';
import ReactDom from 'react-dom/client';
export default function run(div: HTMLDivElement) {
    const root = ReactDom.createRoot(div);
    root.render(<Component text="Hello World" />);
}

function Component(props: {text: string}) {
    return <div>{props.text}</div>
}