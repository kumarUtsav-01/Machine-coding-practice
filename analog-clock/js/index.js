const runClock = () => {
  const timer = setInterval(() => {
    const hourElement = document.getElementById("hour");
    const minuteElement = document.getElementById("minute");
    const secondElement = document.getElementById("second");
    const date = new Date();

    const UTCHours = date.getHours();
    const AMPMHours = UTCHours >= 12 ? UTCHours - 12 : UTCHours;
    const secondDegree = date.getSeconds() / 60;
    const minuteDegree = date.getMinutes() / 60;
    const minuteDegreeToHour = minuteDegree / 12;
    const hourDegree = minuteDegreeToHour + AMPMHours / 12;

    hourElement.style.rotate = `${hourDegree - 0.25}turn`;
    minuteElement.style.rotate = `${minuteDegree - 0.25}turn`;
    secondElement.style.rotate = `${secondDegree - 0.25}turn`;
  }, 1000);

  return timer;
};

const displayClockNumbers = () => {
  const clockNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const clock = document.getElementById("clock");

  clockNumbers.forEach((number) => {
    const node = document.createElement("div");
    node.textContent = number;
    node.style.setProperty("--rotation", `${30 * number}deg`);
    node.classList.add("clock_number");
    clock.appendChild(node);
  });
};

function removeTimer(timer) {
  clearInterval(timer);
}

window.addEventListener("DOMContentLoaded", () => {
  displayClockNumbers();
  const timer = runClock();

  window.addEventListener("beforeunload", () => {
    removeTimer(timer);
  });
});
