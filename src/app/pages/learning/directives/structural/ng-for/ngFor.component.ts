import { Component } from '@angular/core';

@Component({
  selector: 'test-ng-for',
  template: `<div class="container">
    <h3>Users</h3>

    <label>Add Users</label>
    <input type="text" class="form-control" [(ngModel)]="user" />

    <button class="btn btn-primary" (click)="addUser()">Add User</button>

    <button class="btn btn-primary" (click)="removeAllUsers()">
      Remove all users
    </button>

    <button class="btn btn-primary" (click)="removeLastUser()">
      Remove last user
    </button>

    <button class="btn btn-primary" (click)="removeFirstUser()">
      Remove first user
    </button>

    <li *ngFor="let user of users">{{ user }}</li>
  </div> `,
  styles: [
    `
      .status__true {
        color: green;
        font-weight: bold;
      }

      .status__false {
        color: red;
        font-weight: bold;
      }
    `,
  ],
})
export class NgForStructuralDirective {
  user = '';
  users: string[] = [];

  addUser() {
    if (this.user && typeof this.user === 'string') {
      this.users.push(this.user);
      console.log(this.users);
    }
  }

  removeAllUsers() {
    this.users.length = 0;
  }

  removeLastUser() {
    this.users.pop();
  }

  removeFirstUser() {
    this.users.shift();
  }
}
