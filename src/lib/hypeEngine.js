/**
 * Hype Engine Logic
 * 
 * Takes weather data and returns a Hype Score (0-100) and Label.
 */
export function calculateHypeScore(weather) {
    let score = 0;
    let label = "NO HYPE";

    const condition = weather.condition.toLowerCase();
    const temp = weather.temp;

    // 1. Base Score on Condition
    if (condition.includes("snow")) {
        score += 50;
        if (condition.includes("heavy")) score += 40;
        else if (condition.includes("moderate")) score += 20;
        else score += 10;
    } else if (condition.includes("freezing")) {
        score += 30; // Ice cancel?
    } else if (condition.includes("rain")) {
        score += 10; // Sad rain
    }

    // 2. Temp Modifier
    if (temp < 25) score += 10;
    else if (temp < 32) score += 5;
    else if (temp > 40) score -= 20;

    // 3. Clamp
    score = Math.max(0, Math.min(100, score));

    // 4. Determine Label
    if (score >= 90) label = "ABSOLUTE CHAOS";
    else if (score >= 70) label = "SCHOOL CLOSING IMMINENT";
    else if (score >= 50) label = "DELAY POTENTIAL";
    else if (score >= 30) label = "GROCERY RUN";
    else if (score > 0) label = "JUST COLD";
    else label = "TOTAL DUD";

    return {
        score,
        label,
        // Note: 'summary' is now handled by aiService, but we keep a fallback here just in case
        summary: `Conditions are ${condition} at ${temp}°F.`
    };
}
