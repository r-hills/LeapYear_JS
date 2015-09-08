var encrypt = function(inputString) {

  var cleanedString = inputString.replace(/[^a-zA-Z]+/g,"");

  if( inputString.length === 1 ) return inputString;
  else return cleanedString;
};


//
// $(document).ready(function() {
//
//   $("form#triangle").submit(function(event) {
//
//     var height = parseInt($("input#height").val());
//     var length = parseInt($("input#length").val());
//     var width = parseInt($("input#width").val());
//
//     var result = checkTriangle(height, length, width);
//
//     $(".triangleResult").text(result);
//     $("#result").show();
//
//     event.preventDefault();
//
//   });
// });
