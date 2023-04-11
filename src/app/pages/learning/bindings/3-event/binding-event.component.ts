import { Component, EventEmitter } from '@angular/core';

console.log('HELLO');

@Component({
  selector: 'test-event-bind',
  template: `
    <div class="container">
      <label>Server Name</label>

      <input
        type="text"
        class="form-control"
        (input)="onUpdateServerName($event)"
      />

      <button
        class="btn btn-primary"
        [disabled]="!allowNewServer"
        (click)="onCreateServer()"
      >
        Add Server
      </button>

      <p>{{ serverCreationStatus }}</p>
    </div>
  `,
  styles: [``],
})
export class EventBindingComponent {
  serverName = 'Test Server';
  allowNewServer = false;
  serverCreationStatus = 'No server was created..!!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created..';
  }

  onUpdateServerName(event: Event) {
    this.serverCreationStatus = (<HTMLInputElement>event.target).value;
  }
}
