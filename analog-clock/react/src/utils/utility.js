export const calculateAngle = (hour, minute, second, type) => {
  const secondAngle = second * 6;
  const minuteAngle = minute * 6;
  const hourLocalFormat = hour > 12 ? hour - 12 : hour;

  if (type === "second-hand") {
    return secondAngle;
  } else if (type === "minute-hand") {
    return minuteAngle;
  } else {
    return hourLocalFormat * 30 + minuteAngle / 12;
  }
};

export const calculateAngledDigits = () => {
  const digits = [
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
    [7, 0],
    [8, 0],
    [9, 0],
    [10, 0],
    [11, 0],
    [12, 0],
  ];

  for (let digit of digits) {
    digit[1] = `${digit[0] * 30}deg`;
  }

  return digits;
};

export const getCurrentTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return { hour, minute, second };
};
