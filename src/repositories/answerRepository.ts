import { prisma } from "../database.js";
import { AnswerData } from '../types/AnswerTypes.js';

export async function insertAnswer(answer: AnswerData) {
    await prisma.answers.create({ data: answer });
}