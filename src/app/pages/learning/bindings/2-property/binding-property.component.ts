import { Component } from '@angular/core';

@Component({
  selector: 'test-property-bind',
  template: `
    <div class="container">
      <p [className]="userStatus">Status</p>
      <button class="btn btn-primary" [disabled]="!ADD_SERVER">
        Add Server
      </button>
    </div>
  `,
  styles: [
    `
      .online {
        font-size: 1.5rem;
        color: green;
        font-weight: bold;
      }

      .offline {
        font-size: 1.5rem;
        color: red;
        font-weight: bold;
      }
    `,
  ],
})
export class PropertyBindingComponent {
  ADD_SERVER = false;
  private STATUS = 'offline';

  constructor() {
    setTimeout(() => {
      this.ADD_SERVER = true;
    }, 5000);
  }

  get userStatus(): string {
    return this.STATUS;
  }
}
