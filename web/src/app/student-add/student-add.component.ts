import { Component } from '@angular/core';
import { FormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  isExpanded = false;

  studentForm = this.formBuilder.group({
    FirstName: '',
    LastName: '',
    Email: '',
    Major: '',
    AverageGrade: ''
  });

  constructor(
    private formsModule: FormsModule,
    private formBuilder: FormBuilder
  ) {}

  // onSubmit(): void {
  //   console.warn('Student has been submitted', this.studentForm.value);
  //   this.studentForm.reset();
  // }
}
