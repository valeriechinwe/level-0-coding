function areaOfTriangle(x, y, z) {
  let t = x + y + z;
  let semiPerimeter = t / 2;

  let sideOne = semiPerimeter - x;
  let sideTwo = semiPerimeter - y;
  let sideThree = semiPerimeter - z;

  let s = sideOne * sideTwo * sideThree;

  let area = Math.sqrt(semiPerimeter * s);
  return area;
}
//test
console.log(areaOfTriangle(3, 4, 5));
