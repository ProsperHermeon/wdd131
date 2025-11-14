// Footer Copyright Year and Last Modified Date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Wind Chill Calculation
// Static values matching the displayed content
const temperature = 28; // °C
const windSpeed = 12; // km/h

// Function to calculate wind chill factor (one line of code)
// Formula for metric: 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
// Where T is temperature in °C and V is wind speed in km/h
function calculateWindChill(temp, wind) {
  return Math.round((13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)) * 10) / 10;
}

// Display wind chill factor
const windChillElement = document.getElementById("windChill");

// Check conditions before calculating wind chill
// Conditions for metric: Temperature <= 10°C AND Wind speed > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillElement.textContent = `${windChill}°C`;
} else {
  windChillElement.textContent = "N/A";
}

