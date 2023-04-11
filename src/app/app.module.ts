import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './pages/books/books.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TesterComponent } from './pages/tester/tester.component';
import { SuccessComponent } from './pages/alerts/success/success.component';
import { WarningComponent } from './pages/alerts/warning/warning.component';
import { BindingModule } from './pages/learning/bindings/binding.module';
import { DirectiveModule } from './pages/learning/directives/directive.module';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CategoriesComponent,
    DashboardComponent,
    TesterComponent,
    SuccessComponent,
    WarningComponent,
  ],
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
