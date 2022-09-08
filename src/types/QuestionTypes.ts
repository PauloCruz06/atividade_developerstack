import { Questions } from "@prisma/client";

export type QuestionData = Omit<Questions, 'id'>;