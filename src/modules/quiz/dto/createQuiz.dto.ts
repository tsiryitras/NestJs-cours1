import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'Le quiz doit avoir une titre' })
  @Length(2, 50)
  title: string;

  @IsNotEmpty()
  @Length(255)
  description: string;
}
