function convert() {
    const fromValue = document.getElementById("from").value;
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
  
    let result;
  
    if (fromUnit === "meters") {
      if (toUnit === "feet") {
        result = fromValue * 3.281;
      } else if (toUnit === "inches") {
        result = fromValue * 39.37;
      } else if (toUnit === "centimeters") {
        result = fromValue * 100;
      } else {
        result = fromValue;
      }
    } else if (fromUnit === "feet") {
      if (toUnit === "meters") {
        result = fromValue / 3.281;
      } else if (toUnit === "inches") {
        result = fromValue * 12;
      } else if (toUnit === "centimeters") {
        result = fromValue * 30.48;
      } else {
        result = fromValue;
      }
    } else if (fromUnit === "inches") {
      if (toUnit === "meters") {
        result = fromValue / 39.37;
      } else if (toUnit === "feet") {
        result = fromValue / 12;
      } else if (toUnit === "centimeters") {
        result = fromValue * 2.54;
      } else {
        result = fromValue;
      }
    } else if (fromUnit === "centimeters") {
      if (toUnit === "meters") {
        result = fromValue / 100;
      } else if (toUnit === "feet") {
        result = fromValue / 30.48;
      } else if (toUnit === "inches") {
        result = fromValue / 2.54;
      } else {
        result = fromValue;
      }
    }
  
    document.getElementById("to").value = result.toFixed(2);
  }
  