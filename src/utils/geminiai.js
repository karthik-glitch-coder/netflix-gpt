import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPENAI_KEY } from "./constant";

// Fetch your API_KEY
const API_KEY = OPENAI_KEY;
// Reminder: This should only be for local testing

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

// ...

// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    
  