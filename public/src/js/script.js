/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint max-classes-per-file: ["error", 2] */

(function BackgroundModule() {
  const canvas = document.querySelector('canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
  }

  class Grid {
    constructor(rows, color) {
      this.rows = rows;
      this.color = color;
    }
  }
  class Square {
    constructor(x, y, color, size) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.size = size;
    }

    draw(c) {
      c.fillStyle = this.color;
      c.fillRect(this.x, this.y, this.size, this.size);
    }
  }
}());
