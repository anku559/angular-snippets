import { Component } from '@angular/core';

@Component({
  selector: 'test-ng-style',
  template: `
    <div class="container">
      <p [ngStyle]="{ backgroundColor: getStatus().color }">
        Server status: {{ getStatus().type }}
      </p>
    </div>
  `,
  styles: [``],
})
export class NgStyleAttributeDirective {
  status = 'offline';

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getStatus() {
    // return this.status === 'online' ? 'green' : 'red';
    return this.status === 'online'
      ? { color: 'green', type: 'ON' }
      : { color: 'red', type: 'OFF' };
  }
}
