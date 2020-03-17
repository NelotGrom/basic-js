module.exports = function getSeason() {
  const month = getMonth();
  if (month === 2 || month === 3 || month === 4) {
    return "spring";
  }
  if (month === 5 || month === 6 || month === 7) {
    return "summer";
  }
  if (month === 8 || month === 9 || month === 10) {
    return "autumn";
  }
  if (month === 0 || month === 1 || month === 11) {
    return "winter";
  }
};

// winter, 11 0 1
//                 spring, 2 3 4
//                 summer, 5 6 7
//                 autumn,8 9 10
