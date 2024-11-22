export function setupHome(element: HTMLDivElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
		element.innerHTML = "Aquib Ahmed " + ": " +counter;
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
