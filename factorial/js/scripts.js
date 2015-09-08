var factorial = function(number) {

  if(number >= 0 && number < 2) return 1;
  else return number * factorial(number -1);
};
