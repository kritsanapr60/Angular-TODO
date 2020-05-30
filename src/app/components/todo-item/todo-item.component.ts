import { Component, OnInit ,Input} from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  //SetDYnamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete':this.todo.complete
    }

    return classes;
  }
  onToggle(todo) {
    // console.log('toggle')
    todo.complete = !todo.complete;
  }

  onDelete(todo) {
    console.log('Delete');
  }
}
