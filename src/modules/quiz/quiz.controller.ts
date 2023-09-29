import { Controller, Get } from '@nestjs/common';

@Controller('quiz')
export class QuizController {
  @Get('/')
  getAllQuiz() {
    return { name: 'auiz', ee: 'sss' };
  }
}
