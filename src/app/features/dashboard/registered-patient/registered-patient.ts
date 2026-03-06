import { Component } from '@angular/core';

@Component({
  selector: 'app-registered-patient',
  imports: [],
  templateUrl: './registered-patient.html',
  styleUrl: './registered-patient.css',
})
export class RegisteredPatient {

  patients: any[] = [];
  ngOnInit() {
    const saved = localStorage.getItem('patients');
    if (saved) {
      this.patients = JSON.parse(saved);
    }
  }
  deletePatient(index: number) {
    // Remove from array
    if (confirm('Are you sure you want to delete this patient?')) {
      this.patients.splice(index, 1);
      // Update localStorage
      localStorage.setItem('patients', JSON.stringify(this.patients));
    }

  }

  clearAll() {
    localStorage.removeItem('patients');
    this.patients = [];

  }
}
