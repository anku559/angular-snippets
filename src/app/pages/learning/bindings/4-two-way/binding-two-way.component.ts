import { Component } from '@angular/core';

@Component({
  selector: 'test-two-way-bind',
  template: `
    <div class="container">
      <label>Server Name</label>

      <input type="text" class="form-control" [(ngModel)]="serverName" />

      <button
        class="btn btn-primary"
        [disabled]="!allowNewServer"
        (click)="onCreateServer()"
      >
        Add Server
      </button>

      <button
        class="btn btn-danger"
        [disabled]="allowNewServer"
        (click)="onRemoveServer()"
      >
        Remove Server
      </button>

      <p>{{ serverCreationStatus }}</p>
      <p *ngIf="serverCreated">{{ serverName }}</p>

      <br />

      <label>User Name</label>
      <input type="text" class="form-control" [(ngModel)]="userName" />
      <button
        class="btn btn-primary"
        [disabled]="!userName ? true : false"
        (click)="onResetUser()"
      >
        Reset User
      </button>

      <p>{{ userName }}</p>
    </div>
  `,
  styles: [``],
})
export class TwoWayBindingComponent {
  serverName = '';
  serverCreated = false;
  allowNewServer = false;
  serverCreationStatus = 'No server was created..!!';
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = `Server created with name: ${this.serverName}`;
    this.serverCreated = true;
    this.allowNewServer = false;
  }

  onRemoveServer() {
    this.serverCreationStatus = '';
    this.serverCreated = false;
    this.allowNewServer = true;
  }

  onUpdateServerName(event: Event) {
    this.serverCreationStatus = (<HTMLInputElement>event.target).value;
  }

  onCreateUser() {
    this.userName = `Username: ${this.userName}`;
  }

  onResetUser() {
    this.userName = '';
  }
}
