const express = require('express');
const { exec } = require('child_process');

const app = express();

app.use(express.static('public'));

app.get('/', (_, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/temp', (_, res) => {
  exec('vcgencmd measure_temp', (error, stdout) => {
    if (error) {
      res.json({ celsius: 0, fahreneheit: 0 });
      return;
    }
    const tempString = stdout.trim();
    const tempArray = tempString.split('=');
    const tempC = parseFloat(tempArray[1]);
    const tempF = Math.round((tempC * 9) / 5 + 32);
    os.cpuUsage((v) => {
      const cpuUsage = Math.round(v * 100);
      const memoryUsage = 100 - freeMemoryPercentage();
      res.json({ celsius: tempC, fahrenheit: tempF, cpuUsage, memoryUsage });
    });
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
