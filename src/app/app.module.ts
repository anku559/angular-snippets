import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './pages/learning/playground/playground.component';

// Modules
import { BindingModule } from './pages/learning/bindings/binding.module';
import { DirectiveModule } from './pages/learning/directives/directive.module';

@NgModule({
  declarations: [AppComponent, PlaygroundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BindingModule,
    DirectiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
