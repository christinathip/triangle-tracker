var triangleTypes = ["equilateral", "isosceles", "scalene"];

var isTriangle = function(side1, side2, side3){
  var sides = [side1, side2, side3].sort();
  return sides[0] + sides[1] > sides[2];
}

var triangleType = function(side1, side2, side3){
  if (!isTriangle(side1, side2, side3)){
    return false;
  } else if (side1 === side2 && side2 === side3){
    return 0;
  } else if (side1 !== side2 && side2 !== side3 && side1 !== side3){
    return 2;
  } else {
    return 1;
  }
}

$(document).ready(function(){
  $("#triangle-form").submit(function (event) {
    event.preventDefault();
    var side1 = parseFloat($("#side1").val());
    var side2 = parseFloat($("#side2").val());
    var side3 = parseFloat($("#side3").val());

    $("#side1").val('');
    $("#side2").val('');
    $("#side3").val('');

    var type = triangleType(side1, side2, side3);

    if(type !== false){
      $("#form-output h2").text("Your triangle's type is: " + triangleTypes[type]);
    } else {
      alert("That isn't a triangle.");
    }
  })
});
