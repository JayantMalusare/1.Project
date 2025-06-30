let timer;
let startTime;
let elapsedTime = 0;
let running = false;

function updateTime() {
  const now = Date.now();
  const diff = now - startTime + elapsedTime;

  const hrs = Math.floor(diff / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  document.getElementById("display").textContent =
    `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startStop() {
  if (!running) {
    startTime = Date.now();
    timer = setInterval(updateTime, 1000);
    running = true;
  }
}

function pause() {
  if (running) {
    clearInterval(timer);
    elapsedTime += Date.now() - startTime;
    running = false;
  }
}

function reset() {
  clearInterval(timer);
  document.getElementById("display").textContent = "00:00:00";
  elapsedTime = 0;
  running = false;
}
