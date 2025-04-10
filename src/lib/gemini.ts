import { GoogleGenerativeAI } from '@google/generative-ai';

const genAi = new GoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
})
