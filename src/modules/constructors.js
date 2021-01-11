import { reformatDate } from './getDate';

class List {
  constructor(name) {
    this.name = name;
    this.id = Date.now();
    this.list = [];
  }
}

class Task {
  constructor(errand, due, priority) {
    this.errand = errand;
    this.completed = false;
    this.due = reformatDate(due);
    this.priority = priority;
    this.id = Date.now();

    if (priority === 'high') {
      this.value = 5;
    } else if (priority === 'medium') {
      this.value = 3;
    } else if (priority === 'low') {
      this.value = 1;
    } else { this.value = 0 };

  }
}

export { List, Task };