`strict mode`
const Writable = require("stream").Writable;

class CountStream extends Writable {
  constructor(matchText, options) {
    super(Writable)
    Writable.call(this, options);
    this.count = 0;
    this.matcher = new RegExp(matchText, "ig");
  }

  _write(chunk, encoding, cb) {
    const matches = chunk.toString().match(this.matcher);
    if (matches) {
      this.count += matches.length;
    }
    cb();
  }

  _end() {
    this.emit('total', this.count);
  }
}

module.exports = CountStream;
// exports = CountStream;
