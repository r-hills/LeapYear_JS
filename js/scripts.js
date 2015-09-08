$(document).ready(function() {
  $("form#leap-year").submit(function(event) {

    var result;
    var dataInput = $("input#year").val();
    var year = parseInt(dataInput); 


    if ( (year > 0) ) {
      result = leapYear(year);

      $(".year").text(year + " is");
      if (!result[0]) {
        $(".not").text(" not"); 
      }
      else {
        $(".not").text("");
      }
      $(".message").text(" a leap year!");    

    }
    else { 
      result = [" ","Please enter a positive year number! (Examples: 4, 2100, or 4000)"," "," "]; 
      $(".year").text("The entry \"" + dataInput + "\"");
      $(".not").text("");
      $(".message").text(" is not a valid year number!");
    }

    $("p#explain1").text(result[1]);
    $("p#explain2").text(result[2]);
    $("p#explain3").text(result[3]);
   

    $("#result").show();
    event.preventDefault();
  });
});


//============================================================================
//  Function: LeapYear - returns an array with a boolean for leap year and 
//     strings for detailed explanation
//============================================================================
var leapYear = function(year) {
  var output = [];
  if (year % 4 !== 0) {
    output = [false, "It is NOT a multiple of 4"," "," "];
  }
  else if ( ((year % 4 === 0) && (year % 100 !== 0)) ) {
    output = [true, "It is a multiple of 4","And it is NOT a multiple of 100"," "];
  }  
  else if ( (year % 4000 === 0) ) {
    output = [true, "* It is a multiple of 4000","* NOTE: In the 19th century, Sir John Herschel proposed a" +
                      " modification to the Gregorian calendar with 969 leap days every 4000 years, instead of" +
                      " 970 leap days that the Gregorian calendar would insert over the same period. This would" +
                      " reduce the average year to 365.24225 days. Herschel's proposal would make the year 4000," +
                      " and multiples thereof, common instead of leap. While this modification has often been" +
                      " proposed since, it has never been officially adopted."," "];
  }
  else if ( (year % 400 === 0) ) {
    output = [true, "It is a multiple of 400"," "," "];
  }
  else if (year % 100 === 0) {
    output = [false, "It is a multiple of 4","It is also a multiple of 100","But it is NOT a multiple of 400"];
  }
  return output; 
};
