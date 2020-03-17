module.exports = function countCats(backyard) {
  let earsRowContainer = 0;
  for (let row of backyard) {
    for (let position of row) {
      if (position == "^^") {
        earsRowContainer++;
      }
    }
  }
  return +earsRowContainer;
};
