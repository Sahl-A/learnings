var groupAnagrams = function (strs) {
  const map = {};

  for (const string of strs) {
    const key = [...string].sort().join("");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(string);
  }

  return Object.values()

};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
