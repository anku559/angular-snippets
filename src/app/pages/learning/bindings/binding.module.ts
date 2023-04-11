import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StringInterpolationBindingComponent } from './1-string/binding-string.component';
import { PropertyBindingComponent } from './2-property/binding-property.component';
import { EventBindingComponent } from './3-event/binding-event.component';
import { TwoWayBindingComponent } from './4-two-way/binding-two-way.component';

@NgModule({
  declarations: [
    StringInterpolationBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
  ],
  imports: [FormsModule, CommonModule],
  providers: [],
  exports: [
    StringInterpolationBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
  ],
})
export class BindingModule {}
