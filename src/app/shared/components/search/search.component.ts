import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  // IMPLEMENT ANY INPUT OR OUTPUT YOU MIGHT NEED
  searchForm: FormGroup;
  @Output() cityName = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.inititateForm();
  }

  inititateForm() {
    this.searchForm = this.formBuilder.group({
      city: [ '', Validators.required ]
    });
  }

  search() {
    // TO BE IMPLEMENTED
    this.cityName.emit(this.searchForm.controls.city.value);
    this.searchForm.reset();    
  }
}
