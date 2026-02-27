//This component only consume the shared state
import { Component, inject } from '@angular/core';

import { PatientService } from '../../../core/patient.service';
import { PatientList } from "../patient-list/patient-list";

@Component({
  selector: 'app-patient-detail',
  standalone:true,
  imports: [PatientList],
  templateUrl: './patient-detail.html',
  styleUrl: './patient-detail.css',
})
export class PatientDetail {
  

  private patientDetail = inject(PatientService);           // Old Version: constructor(private listedPatient:PatientService ){}
  patient=this.patientDetail.getSelectedPatient()
}
