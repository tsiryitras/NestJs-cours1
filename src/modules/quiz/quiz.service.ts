import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  getAllQuiz() {
    return { name: 'auiz' };
  }
}
