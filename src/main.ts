import { setupHome } from './../public/typescript/home'

document.querySelector<HTMLDivElement>("#portfolio")!.innerHTML = `<div id="home"></div>`;

setupHome(document.querySelector<HTMLButtonElement>('#btn-test'), document.querySelector<HTMLDivElement>('#portfolio')!)
