// https://leetcode.com/problems/word-pattern/

var wordPattern = function (pattern, s) {
  if (pattern.length !== s.split(" ").length) {
    return false;
  }

  const sArr = s.split();
  const map = {};
  for (let i = 0; i < pattern.length; i++) {
    if (map[pattern[i]] && map[pattern[i]] !== sArr[i]) {
      return false;
    }
    map[pattern[i]] = sArr[i];
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
