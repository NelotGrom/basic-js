module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let collectLetters = [];
    for (let memberName of members) {
      if (typeof memberName === "string") {
        collectLetters.push(
          memberName
            .trim()
            .charAt(0)
            .toUpperCase()
        );
      }
    }
    return collectLetters.sort().join("");
  } else {
    return false;
  }
};
