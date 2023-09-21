const _os = require('os');

function freeMemory() {
  return _os.freemem() / (1024 * 1024);
}

function totalMemory() {
  return _os.totalmem() / (1024 * 1024);
}

function freeMemoryPercentage() {
  return _os.freemem() / _os.totalmem();
}

module.exports = { freeMemory, totalMemory, freeMemoryPercentage };
