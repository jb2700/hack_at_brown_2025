import axios from 'axios';
import hugg from './../lib/hugging';
// import { OpenaiKey } from './../lib/chatgpt';
const CHATGPT_API_URL = 'https://api.openai.com/v1/completions';
const CHATGPT_API_KEY = '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';

import { OpenAI } from 'openai';

// Initialize OpenAI API client
const openai = new OpenAI({
  apiKey: CHATGPT_API_KEY, // Use your actual OpenAI API key here
  baseURL: 'https://api.openai.com/v1', // Set API base URL (default)
});

const API_URL = 'https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct';
const HUGGING_FACE_API_KEY = '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';

export const getChatGPTResponse = async (prompt) => {
  try {
    // const response = await openai.chat.completions.create({
    //     model: 'gpt-3.5-turbo', // Use the appropriate model (e.g., gpt-3.5-turbo, gpt-4)
    //     messages: [
    //       { role: 'user', content: prompt },
    //     ],
    //     max_tokens: 150,
    //     temperature: 0.7,
    //   });
    const response = await axios.post(
        API_URL,
        { 
          inputs: prompt, // Prompt to the model
        },
        {
          headers: {
            'Authorization': `Bearer ${HUGGING_FACE_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
    );
    // const res = response.choices[0].message.content;
    const generatedText = response.data[0].generated_text;
    // console.log("here is gpt response");
    console.log(generatedText);
    return generatedText // Returns the text response from Llama
  } catch (error) {
    console.log(error);
    console.log(error.response);
    console.log(error.response.data);
    console.error('Error fetching data from OpenAI:', error);
    throw new Error('Failed to get response from ChatGPT');
  }
};
