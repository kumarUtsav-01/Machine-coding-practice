window.addEventListener("DOMContentLoaded", () => {
  const addCountButton = document.querySelector(".addCount");
  const substractCountButton = document.querySelector(".substractCount");
  const resetCountButton = document.querySelector(".resetButton");
  const stepByInput = document.querySelector(".stepBy");

  addCountButton.onclick = addCount;
  substractCountButton.onclick = substractCount;
  resetCountButton.onclick = resetCount;
  stepByInput.onchange = updateStepCount;
});

const updateStepCount = (e) => {
  const stepByInput = document.querySelector(".stepBy");
  const count = e.target.value;

  stepByInput.setAttribute("value", count);
};

const updateCounter = (count) => {
  const counter = document.querySelector("#count");
  counter.textContent = count;
};

const getCurrentCount = () => {
  const count = document.querySelector("#count").textContent;
  return isNaN(Number(count)) ? 0 : Number(count);
};

const getStepCount = () => {
  const stepCount = document.querySelector(".stepBy").value;
  return isNaN(Number(stepCount)) ? 0 : Number(stepCount);
};

const addCount = () => {
  const currentCount = getCurrentCount();
  const stepCount = getStepCount();
  const newCount = currentCount + stepCount;

  updateCounter(newCount);
};

const substractCount = () => {
  const currentCount = getCurrentCount();
  const stepCount = getStepCount();
  const newCount = currentCount - stepCount;

  updateCounter(newCount);
};

const resetCount = () => {
  updateCounter(0);
};
