import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormArray,
  FormControl
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NumericOnlyDirective } from '../../../directives/numeric-only.directive';

@Component({
  selector: 'app-patient-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NumericOnlyDirective],
  templateUrl: './patient-registration.html',
  styleUrl: './patient-registration.css'
})
export class PatientRegistrationComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  patientForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-z\s]+$/)]],
    email: ['', [Validators.required, Validators.email]],
    age: ['', [Validators.required, Validators.min(18)]],
    diseases: this.fb.array([
      this.fb.control('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z\s]+$/)
      ])
    ]),
    phone: ['', [Validators.required, Validators.minLength(10)]]
  });

  // Getter for FormArray
  get diseases(): FormArray<FormControl<string | null>> {
    return this.patientForm.get('diseases') as FormArray<FormControl<string | null>>;
  }

  addDisease() {
    this.diseases.push(
      this.fb.control('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z\s]+$/)
      ])
    );
  }

  removeDisease(index: number) {
    this.diseases.removeAt(index);
  }



  // getFullNameError(): string | null {
  //   const control = this.patientForm.get('fullName');

  //   if (!control || !(control.dirty || control.touched)) return null;

  //   if (control.errors?.['required']) return 'Name is required';
  //   if (control.errors?.['minlength']) return 'Minimum 3 characters required';
  //   if (control.errors?.['pattern']) return 'Only letters allowed';

  //   return null;
  // }


  isInvalid(controlPath: string) {
    const control = this.patientForm.get(controlPath);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  hasError(controlPath: string, errorKey: string) {
    const control = this.patientForm.get(controlPath);
    return control?.errors?.[errorKey] && (control?.dirty || control?.touched);
  }

  onSubmit() {
    if (this.patientForm.valid) {
      console.log('Patient Data:', this.patientForm.value);
      this.router.navigateByUrl('/dashboard');
    }
  }

  onReset() {
    this.patientForm.reset();
    this.diseases.clear();
    this.addDisease(); // keep at least one field
  }
}
