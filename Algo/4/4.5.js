function getDistance(x1, y1, x2, y2) {
    let y = x2 - x1;
    let x = y2 - y1;
  
    return Math.sqrt(x * x + y * y);
  }

console.log(getDistance(1, 1, 2, 2))
console.log(getDistance(1, 1, 3, 1))
console.log(getDistance(4, 1, 1, 1))
console.log(getDistance(-2, 2, 2, -2))