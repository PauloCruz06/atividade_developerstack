import { Answers } from "@prisma/client";

export type AnswerData = Omit<Answers, 'id'>;