export function setupHome(element: HTMLButtonElement | null, previousSibling: HTMLDivElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
		previousSibling.innerHTML = "Aquib Tabish" + ": " +counter;
  }
  element?.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
