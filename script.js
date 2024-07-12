function convertTemperature() {
  const temperatureInput = document.getElementById("temperature").value;
  const unit = document.getElementById("unit").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(temperatureInput)) {
    resultDiv.textContent = "Please enter a valid number!";
    return;
  }

  const temperature = parseFloat(temperatureInput);
  let convertedTemperature;
  let convertedUnit;

  if (unit === "celsius") {
    convertedTemperature = (temperature * 9) / 5 + 32;
    convertedUnit = "Fahrenheit";
    resultDiv.innerHTML = `${temperature}°C is ${convertedTemperature.toFixed(
      2
    )}°F`;
  } else if (unit === "fahrenheit") {
    convertedTemperature = ((temperature - 32) * 5) / 9;
    convertedUnit = "Celsius";
    resultDiv.innerHTML = `${temperature}°F is ${convertedTemperature.toFixed(
      2
    )}°C`;
  } else if (unit === "kelvin") {
    // Kelvin to Celsius and Fahrenheit
    convertedTemperatureC = temperature - 273.15;
    convertedTemperatureF = ((temperature - 273.15) * 9) / 5 + 32;
    resultDiv.innerHTML = `${temperature}K is ${convertedTemperatureC.toFixed(
      2
    )}°C or ${convertedTemperatureF.toFixed(2)}°F`;
  }
}
