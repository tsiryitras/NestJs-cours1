import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [QuizModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
