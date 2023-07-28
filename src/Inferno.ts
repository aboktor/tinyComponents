import  {render} from 'inferno';
import {createElement} from 'inferno-create-element';

export default function run(div: HTMLDivElement) {
    render(createElement(Component, {text: 'Hello World!'}), div);
}

function Component(props:{text: string}) {
    return createElement('div', null, props.text);
}