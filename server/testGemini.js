// import OpenAI from "openai";
// import "dotenv/config";

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
//   baseURL: process.env.OPENAI_BASE_URL,
// });

// try {
//   const response = await client.chat.completions.create({
//     model: process.env.OPENAI_MODEL,
//     messages: [
//       {
//         role: "user",
//         content: "Say Hello"
//       }
//     ]
//   });

//   console.log(response.choices[0].message.content);
// } catch (error) {
//   console.log(error);
// }

import "dotenv/config";
import ai from "./configs/ai.js";

const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Say Hello"
});

console.log(response.text);