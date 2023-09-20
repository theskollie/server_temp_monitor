
async function getSysTemp() {
  const data = await fetch('/temp');
  const {celsius, fahrenheit} = await data.json();
  return {celsius, fahrenheit};
}

document.addEventListener('DOMContentLoaded', () => {
   const celsiusElement = document.getElementById('celsius');
   const fahrenheitElement = document.getElementById('fahrenheit');
   const lastUpdatedElement = document.getElementById('last_updated');

   async function UpdateUI() {
    const {celsius, fahrenheit} = await getSysTemp();
    const date = new Date();

    lastUpdatedElement.textContent =  `Last Updated: ${date.toLocaleTimeString()}`;
    celsiusElement.textContent = `${celsius} Celsius`;
    fahrenheitElement.textContent = `${fahrenheit} Fahrenheit`
   }

   UpdateUI();
   setInterval(UpdateUI, 5000);
})