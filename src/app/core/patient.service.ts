import { Injectable, signal } from '@angular/core';
export interface patientUser {
  id: number,
  name: string,
  address: string,
  checkedAt: Date | null | string
}

@Injectable({
  providedIn: 'root',
})

export class PatientService {

  private patients: patientUser[] = [
    {
      id: 1,
      name: 'Ahmad Khan',
      address: 'Street # 09',
      checkedAt: new Date()
    },
    {
      id: 2,
      name: 'Ali Shan',
      address: 'Street # 23',
      checkedAt: new Date('2024-01-10')

    },
    {
      id: 3,
      name: 'Bilal Nawab',
      address: 'Street # 19',
      checkedAt: 'Not checked yet'

    },
    {
      id: 4,
      name: 'Usama Qadeer',
      address: 'Street # 15',
      checkedAt: new Date()

    },
    {
      id: 5,
      name: 'Mushtaq Ahmad',
      address: 'Street # 12',
      checkedAt: new Date('2025-01-10')

    },
    {
      id: 6,
      name: 'Nouman Ali',
      address: 'Street # 34',
      checkedAt: null

    },
    
  ]
  selectedPatient = signal<patientUser | null>(null)                            // Shared State   // store the state of selectedPatient
  
  getPatient() {
    return this.patients
  }
  getSelectedPatient() {                                                      //Component can react to selection changes using this signal.
    return this.selectedPatient
  }
  selectPatient(patients: patientUser) {                                    // update the selected patient /update the shred reactive state 
    this.selectedPatient.set(patients)
  }
 
}
