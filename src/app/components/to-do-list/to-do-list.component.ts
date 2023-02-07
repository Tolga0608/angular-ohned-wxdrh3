import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../model/to-do';
import { ToDoDataService } from '../../services/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  constructor(private ToDoDataService: ToDoDataService) {

  }
  get toDos(): ToDo[] {
    return this.ToDoDataService.toDos;
  }

  ngOnInit() {
    
  }
}
