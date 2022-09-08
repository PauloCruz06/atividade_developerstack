import { prisma } from "../database.js";
import { QuestionData } from '../types/QuestionTypes.js';

export async function findAllQuestions() {
    const result = await prisma.questions.findMany();
    return result;
}
  
export async function findByQuestionId(questionId: number) {
    const result = await prisma.questions.findUnique({ where: { id: questionId } });
    return result;
}
  

