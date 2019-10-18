// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(dimensions) {
//   this.length = dimensions.length;
//   this.width = dimensions.width;
//   this.height = dimensions.height;
// }

// CuboidMaker.prototype.volume = function() {
  //   return `${this.length * this.width * this.height} is the Cuboid volume`;
  // }
  // CuboidMaker.prototype.surfaceArea = function() {
  //   return `${2 * (this.length * this.width + this.length * this.height + this.width * this.height)} is the Cuboid surface area`;
//}

class CuboidMaker {
  constructor(dimensions) {
    this.length = dimensions.length;
    this.width = dimensions.width;
    this.height = dimensions.height;
  }
  volume() {
    return `${this.length * this.width * this.height} is the Cuboid volume`;
  }
  surfaceArea() {
    return `${2 * (this.length * this.width + this.length * this.height + this.width * this.height)} is the Cuboid surface area`;
  }
}

class CubeMaker extends CuboidMaker {
  constructor(length) {
    super(length);
  }
  volume() {
    return `${Math.pow(this.length, 3)} is the Cube's volume`;
  }
  surfaceArea() {
    return `${ 6 * Math.pow(this.length, 2) } is the Cube's surface area`;
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

const cubic = new CubeMaker({length: 5});
// console.log(cubic);
// cubes will only have length dimension, because every side is the same length
console.log(cubic.volume());
console.log(cubic.surfaceArea());