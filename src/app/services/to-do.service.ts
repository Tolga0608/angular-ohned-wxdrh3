import { Injectable } from '@angular/core';
import { ToDo } from '../model/to-do';

@Injectable()
export class ToDoDataService {
  toDos: ToDo[] = [];

  saveTodo(toDo: ToDo) {
    this.toDos.push(toDo);
  }

  constructor() {
    this.toDos.push(new ToDo('clean my bedroom', true, '09.03.2022'));
    this.toDos.push(new ToDo("Gym", false,"No Frist"));
    this.toDos.push(new ToDo("Sleep", false,"No Frist"));
    this.toDos.push(new ToDo("Fight against Emre Remzi", false, "Friday Night at 6am"));
    
  }
}
