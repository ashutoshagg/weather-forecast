import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { SpinnerService } from './services/spinner.service';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    SpinnerComponent,
  ],
  exports: [
    SearchComponent,
    ResultsComponent,
    SpinnerComponent,
  ],
  providers: [
    SpinnerService,
  ]
})
export class SharedModule { }
