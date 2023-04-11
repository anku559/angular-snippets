import { Component } from '@angular/core';

@Component({
  selector: 'test-ng-if-else',
  template: `
    <div class="container">
      <!-- Switch Case -->

      <ng-template #statusOnline> User Status: {{ status }} </ng-template>
      <ng-template #statusOffline> User Status: {{ status }} </ng-template>
      <ng-template #statusDeleted> User Status: {{ status }} </ng-template>
      <ng-template #statusInactive> User Status: {{ status }} </ng-template>

      <p *ngIf="status === 'ONLINE'; then statusOnline; else statusOffline"></p>

      <!-- Switch Case -->
      <div [ngSwitch]="true">
        <div
          *ngSwitchCase="
            data.type === 'multi-choice' || data.type === 'single-choice'
          "
        >
          FORM 1
          <h1>Ok</h1>
        </div>

        <div *ngSwitchCase="data.type === 'range'">
          FORM 2
          <h1>Ok</h1>
          <h1>Ok</h1>
        </div>

        <div *ngSwitchCase="data.type === 'text'">
          FORM 3
          <h1>Ok</h1>
          <h1>Ok</h1>
          <h1>Ok</h1>
        </div>

        <div *ngSwitchCase="data.type === 'password'">
          Form 4
          <h1>Ok</h1>
          <h1>Ok</h1>
          <h1>Ok</h1>
          <h1>Ok</h1>
        </div>
        <div *ngSwitchDefault>FORM Default</div>
      </div>
    </div>
  `,
  styles: [
    `
      .status__true {
        color: blue;
        font-weight: bold;
      }

      .status__false {
        color: cyan;
        font-weight: bold;
      }
    `,
  ],
})
export class NgIfElseStructuralDirective {
  status = 'OFFLINE';
  data = { type: 'single-choice' };

  // changeStatus() {
  //   this.status = this.status ? false : true;
  // }
}
