import { Component } from '@angular/core';

@Component({
  selector: 'test-ng-if',
  template: `
    <div class="container">
      <p class="status__true" *ngIf="status">Show me if status is true..</p>

      <br />

      <p class="status__false" *ngIf="!status">Show me if status is false..</p>

      <button class="btn btn-primary" type="button" (click)="changeStatus()">
        Change Status
      </button>
    </div>
  `,
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
export class NgIfStructuralDirective {
  status = false;

  changeStatus() {
    this.status = this.status ? false : true;
  }
}
