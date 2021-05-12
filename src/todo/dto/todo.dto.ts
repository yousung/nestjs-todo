import { PartialType } from '@nestjs/mapped-types';
import { Status } from '../entities/todo.entity';
import { IsNotEmpty, Length, IsEnum } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty({ message: '내용은 필수 값입니다.' })
  @Length(2, 50)
  readonly content: string;

  @IsEnum(Status, { message: '잘못된 상태 값 입니다.' })
  readonly status: Status = Status.READY;
}

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
