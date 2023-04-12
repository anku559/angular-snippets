import { Component } from '@angular/core';

@Component({
  selector: 'test-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent {
  displayStatus = false;
  log: number[] = [];

  onToggleDetails() {
    this.displayStatus = !this.displayStatus;
    this.log.push(this.log.length + 1);
  }
}
