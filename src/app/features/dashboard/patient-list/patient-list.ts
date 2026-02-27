import { Component,inject,OnInit } from '@angular/core';
import { PatientService, patientUser } from '../../../core/patient.service';

@Component({
  selector: 'app-patient-list',
  imports: [],
  templateUrl: './patient-list.html',
  styleUrl: './patient-list.css',
})
export class PatientList implements OnInit{
  patients:patientUser[]=[]

  private listedPatient = inject(PatientService);           // Old Version: constructor(private listedPatient:PatientService ){}
  ngOnInit() {
  this.patients=this.listedPatient.getPatient();
  console.log(this.patients);
  
}
selectPatient(patient:patientUser){                                                                                       //updates the shared state via the service
  this.listedPatient.selectPatient(patient)
}
}
