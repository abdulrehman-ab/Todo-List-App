import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!:Todo[];

  inputTodo:string = "";

  constructor(private notifyService : NotificationService) { }
   
  showToasterSuccess(){
      this.notifyService.showSuccess("Task Completed Successfully", "Congratulations!")
  }
  showToasterWarning(){
    this.notifyService.showWarning("Task Got Removed", "Hurray!")
  }


  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
  }

  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }

}