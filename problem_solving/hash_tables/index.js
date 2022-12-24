class HashTable {
  constructor(size = 2) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0, WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.lenght, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * (WEIRD_PRIME + value)) % this.keyMap.length;
    }
    return total
  }

  // implement Set 
  // This should be equivelent to const friends = {}
  // friends[zein] = 'nebourhood' 

  // very basic set method, it even sets the same key in multiple entries 
  set(key, value) {
    const index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    } 
    this.keyMap.push([key, value])
  }
}

const obj = new HashTable(4)

obj.set('length', 54)
obj.set('width', 30)
obj.set('height', 15)

console.log(obj);
