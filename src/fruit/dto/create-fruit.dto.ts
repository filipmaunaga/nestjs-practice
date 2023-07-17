import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateFruitDto {
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  origin: string;
}
