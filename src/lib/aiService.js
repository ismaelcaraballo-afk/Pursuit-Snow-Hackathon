/**
 * AI Service
 * 
 * Simulates calling an LLM to generate a hype summary.
 */

const PROMPTS = [
    "Take this boring forecast and make it sound like an ESPN announcer shouting about the apocalypse.",
    "Describe the snow potential like a hype-beast sneaker drop.",
    "Explain the weather using only Gen-Z slang."
];

export async function generateHypeSummary(weatherData, score) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // In a real app, we would call OpenAI/Anthropic here.
    // For now, we return a mock response based on the score.

    const currentYear = new Date().getFullYear();

    if (score > 80) {
        return `LISTEN UP FOLKS! MOTHER NATURE IS ABOUT TO DROP THE HARDEST MIXTAPE OF ${currentYear}! WE ARE TALKING WHITE OUT CONDITIONS! SCHOOL? CANCELLED! WORK? FORGET IT! GET YOUR SNACKS OR GET WRECKED!`;
    } else if (score > 50) {
        return "We have some solid activity on the radar. It's not a category 5 event, but the vibes are definitely accumulating. Keep your chargers ready and your pyjamas on standby.";
    } else {
        return "SAD TROMBONE NOISES. The data is giving... nothing. It's just rain. Go do your homework. The sky has disappointed us all.";
    }
}
