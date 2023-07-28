export default function run(div: HTMLDivElement) {
    render(div, "Hello World!");
}

function render(div: HTMLDivElement, text: string) {
    const newdiv = document.createElement("div");
    newdiv.innerText = text;
    div.appendChild(newdiv);
}