import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';
import { Todo } from './entities/todo.entity';
import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class TodoService {
  private id = 0;
  private todos: Todo[] = [];

  create(createTodoDto: CreateTodoDto): Todo {
    this.id++;
    const todo = {
      id: this.id,
      ...createTodoDto,
    };

    this.todos.push(todo);
    return todo;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const findId = this.todos.findIndex((todo) => todo.id === id);
    if (findId === -1) {
      throw new NotFoundException();
    }
    return this.todos[findId];
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const findId = this.todos.findIndex((todo) => todo.id === id);
    if (findId === -1) {
      throw new NotFoundException();
    }

    this.todos[findId] = {
      ...this.todos[findId],
      ...updateTodoDto,
    };

    return this.todos[findId];
  }

  remove(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
