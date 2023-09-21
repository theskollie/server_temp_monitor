async function getSysTemp() {
  const data = await fetch('/temp');
  const { celsius, fahrenheit, cpuUsage } = await data.json();
  return { celsius, fahrenheit, cpuUsage };
}

document.addEventListener('DOMContentLoaded', () => {
  const celsiusElement = document.getElementById('celsius');
  const fahrenheitElement = document.getElementById('fahrenheit');
  const lastUpdatedElement = document.getElementById('last_updated');
  const cpuUsageElement = document.getElementById('cpu_usage');

  async function UpdateUI() {
    const { celsius, fahrenheit, cpuUsage } = await getSysTemp();
    const date = new Date();

    lastUpdatedElement.textContent = `Last Updated: ${date.toLocaleTimeString()}`;
    celsiusElement.textContent = `${celsius} Celsius`;
    fahrenheitElement.textContent = `${fahrenheit} Fahrenheit`;
    cpuUsageElement.textContent = `CPU Usage: ${cpuUsage}%`;
  }

  UpdateUI();
  setInterval(UpdateUI, 5000);
});
