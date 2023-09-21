async function getSysTemp() {
  const data = await fetch('/temp');
  const { celsius, fahrenheit, cpuUsage, memoryUsage } = await data.json();
  return { celsius, fahrenheit, cpuUsage, memoryUsage };
}

document.addEventListener('DOMContentLoaded', () => {
  const celsiusElement = document.getElementById('celsius');
  const fahrenheitElement = document.getElementById('fahrenheit');
  const lastUpdatedElement = document.getElementById('last_updated');
  const cpuUsageElement = document.getElementById('cpu_usage');
  const memoryUsageElement = document.getElementById('memory_usage');

  async function UpdateUI() {
    const { celsius, fahrenheit, cpuUsage, memoryUsage } = await getSysTemp();
    const date = new Date();

    lastUpdatedElement.textContent = `Last Updated: ${date.toLocaleTimeString()}`;
    celsiusElement.textContent = `${celsius} Celsius`;
    fahrenheitElement.textContent = `${fahrenheit} Fahrenheit`;
    cpuUsageElement.textContent = `CPU Usage: ${cpuUsage}%`;
    memoryUsageElement.textContent = `Memory Usage: ${memoryUsage}%`;
  }

  UpdateUI();
  setInterval(UpdateUI, 5000);
});
