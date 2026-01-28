/**
 * Weather Service
 * 
 * Fetches weather data. Currently mocked.
 */

export async function fetchWeatherData(location = "Boston, MA") {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock response
    return {
        location: location,
        temp: 28, // Fahrenheit
        condition: "Heavy Snow",
        windSpeed: 25, // mph
        precipProb: 95, // %
        timestamp: new Date().toISOString()
    };
}
