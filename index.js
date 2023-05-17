class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += this.items[i];
    }
    return sum;
  }
  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    const sum = this.sum();
    return sum / this.length;
  }
}
module.exports = SortedList;
