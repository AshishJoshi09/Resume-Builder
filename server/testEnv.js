import "dotenv/config";

console.log("KEY:", process.env.OPENAI_API_KEY?.slice(0, 10));
console.log("BASE:", process.env.OPENAI_BASE_URL);
console.log("MODEL:", process.env.OPENAI_MODEL);