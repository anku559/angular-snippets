import { Component } from '@angular/core';

@Component({
  selector: 'test-string-interpolation-bind',
  template: ` <div class="container">
    <p>Server ID: {{ serverId }}</p>
    <p>
      Server Status: {{ serverStatus === 'ONLINE' ? 'Running' : 'Stopped' }}
    </p>
  </div>`,
  styles: [``],
})
export class StringInterpolationBindingComponent {
  SERVER_ID = 14225;
  STATUS = 'ONLINE';

  public get serverId(): number {
    return this.SERVER_ID;
  }

  public get serverStatus(): string {
    return this.STATUS;
  }
}
