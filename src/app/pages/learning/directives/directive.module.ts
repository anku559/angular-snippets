import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Structural
import { NgIfStructuralDirective } from './structural/ng-if/ngif.component';
import { NgIfElseStructuralDirective } from './structural/ng-if-else/ngifelse.component';
import { NgForStructuralDirective } from './structural/ng-for/ngFor.component';

// Attribute
import { NgStyleAttributeDirective } from './atribute/ngStyle/ngStyle.component';
import { NgClassAttributeDirective } from './atribute/ngClass/ngClass.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [
    NgIfStructuralDirective,
    NgIfElseStructuralDirective,
    NgStyleAttributeDirective,
    NgClassAttributeDirective,
    NgForStructuralDirective,
  ],
  exports: [
    NgIfStructuralDirective,
    NgIfElseStructuralDirective,
    NgStyleAttributeDirective,
    NgClassAttributeDirective,
    NgForStructuralDirective,
  ],
})
export class DirectiveModule {}
