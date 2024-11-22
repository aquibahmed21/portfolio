import { setupHome } from './../public/typescript/home'

document.querySelector<HTMLDivElement>("#portfolio")!.innerHTML = `
  <div id="home">
    Aquib Ahmed SC
  </div>
`

setupHome(document.querySelector<HTMLDivElement>('#home')!)
