import {h, render} from 'preact';

export default function run(div: HTMLDivElement) {
    render( Component({text: 'Hello World!'}), div);
}

function Component(props: {text: string}) {
    return h('div', null, props.text);
}