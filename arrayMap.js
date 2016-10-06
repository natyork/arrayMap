var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(item, index, array){
  var squareX = Math.pow(item.x, 2);
  var squareY = Math.pow(item.y, 2);
  var z = Math.sqrt((squareX + squareY));
  return z
});

//want to add new item in each object of the array, z = sqrt(x^2+y^2)


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);