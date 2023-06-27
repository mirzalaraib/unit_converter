function convert() {
    var value = document.getElementById('value').value;
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var result;
  
    // Conversion formulas
    if (fromUnit === 'cm' && toUnit === 'm') {
      result = value / 100;
    } else if (fromUnit === 'cm' && toUnit === 'km') {
      result = value / 100000;
    } else if (fromUnit === 'm' && toUnit === 'cm') {
      result = value * 100;
    } else if (fromUnit === 'm' && toUnit === 'km') {
      result = value / 1000;
    } else if (fromUnit === 'km' && toUnit === 'cm') {
      result = value * 100000;
    } else if (fromUnit === 'km' && toUnit === 'm') {
      result = value * 1000;
    } else {
      result = value; // If same units are selected, result will be the same as the input value
    }
  
    // Display the result
    document.getElementById('result').innerHTML = value + ' ' + fromUnit + ' is equal to ' + result + ' ' + toUnit;
  }
