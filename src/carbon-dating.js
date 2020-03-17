const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    isFinite(sampleActivity) &&
    typeof sampleActivity === "string" &&
    sampleActivity > 0 &&
    sampleActivity < 15
  ) {
    let result =
      Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
    return Math.ceil(result);
  }
  return false;
};
