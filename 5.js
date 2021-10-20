function areaOfTriangle(x, y, z) {
  var t = x + y + z;
  var semiPerimeter = t / 2;

  var b = semiPerimeter - x;
  var c = semiPerimeter - y;
  var d = semiPerimeter - z;

  var e = b * c * d;

  var area = Math.sqrt(semiPerimeter * e);
  return area;
}
//test
console.log(areaOfTriangle(5, 6, 7));
