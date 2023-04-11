import { Component } from '@angular/core';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss'],

  // selector: '[app-tester]', => HTML <div app-tester> </div>
  // selector: '.app-tester', => HTML <div class="app-tester"> </div>
  // ID selector is not supported by Angular also the Pseudo Selectors

  // template: ` <h1>From the template and not from templateUrl</h1> `,

  // styles: [
  //   `
  //     h1 {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class TesterComponent {
  name = 'Ankit Singh';
  students = [1, 2, 3, 4, 5];
  isValid = false;
}
