var checkTriangle = function(height, length, width) {

    var dimensions = [height, length, width];
    var max = Math.max.apply(0,dimensions);
    var indexPos = dimensions.splice(dimensions.indexOf(max),1);
    var sum = dimensions[0] + dimensions[1];

    if (sum >= max) {
      if(height === length && height === width)
        return "equilateral";
      else if (length === height || height === width || width === length)
        return "isosceles";
      else
        return "scalene";
    }
    
    return "not a triangle";
};

$(document).ready(function() {

  $("form#triangle").submit(function(event) {

    var height = parseInt($("input#height").val());
    var length = parseInt($("input#length").val());
    var width = parseInt($("input#width").val());

    var result = checkTriangle(height, length, width);

    $(".triangleResult").text(result);
    $("#result").show();

    event.preventDefault();

  });
});
