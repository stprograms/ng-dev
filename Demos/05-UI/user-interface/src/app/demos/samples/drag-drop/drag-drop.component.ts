import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { Todo } from "./todo";

@Component({
  selector: "app-drag-drop",
  templateUrl: "./drag-drop.component.html",
  styleUrls: ["./drag-drop.component.scss"]
})
export class DragDropComponent implements OnInit {
  constructor() {}

  public todo: Todo[] = [];

  public done: Todo[] = [];

  ngOnInit() {
    this.todo = [
      { title: "Get to work", dateAdded: new Date().toString() },
      { title: "Pick up groceries", dateAdded: new Date().toString() },
      { title: "Go home", dateAdded: new Date().toString() },
      { title: "Fall asleep", dateAdded: new Date().toString() }
    ];

    this.done = [
      { title: "Get up", dateAdded: new Date().toString() },
      { title: "Brush teeth", dateAdded: new Date().toString() },
      { title: "Take a shower", dateAdded: new Date().toString() },
      { title: "Check e-mail", dateAdded: new Date().toString() },
      { title: "Walk dog", dateAdded: new Date().toString() }
    ];
  }

  drop(event: CdkDragDrop<Todo[]>) {
    // first check if it was moved within the same list or moved to a different list
    if (event.previousContainer === event.container) {
      // change the items index if it was moved within the same list
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // remove item from the previous list and add it to the new array
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
