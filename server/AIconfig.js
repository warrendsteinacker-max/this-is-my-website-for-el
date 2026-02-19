import {GooleGenAI} from '@google/genai'


const genAI = new GooleGenAI(process.env.AI_KEY);

const AI = genAI.getGenerativeModel({model: 'gemini-1.5-flash'})

export default AI