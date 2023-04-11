import { Component } from '@angular/core';

@Component({
  selector: 'test-ng-class',
  template: `
    <div class="container">
      <p
        [ngClass]="{
          online: status === 'online',
          offline: status === 'offline'
        }"
      >
        Status is {{ status }}
      </p>
    </div>
  `,
  styles: [
    `
      .online {
        color: white;
        background-color: green;
        font-weight: bold;
      }

      .offline {
        color: white;
        background-color: red;
        font-weight: bold;
      }
    `,
  ],
})
export class NgClassAttributeDirective {
  status = 'offline';

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getStatus() {
    // [ngStyle]="{
    //   backgroundColor: getStatus()[0],
    //   fontWeight: getStatus()[1]
    // }"
    return this.status === 'online' ? ['green', 'bold'] : ['red', 'bold'];
  }
}
