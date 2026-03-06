import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { PatientRegistrationComponent } from './patient-registration/patient-registration';
import { dashboardDeactivateGuard } from '../../core/dashboard-deactivate.guard';
export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canDeactivate: [dashboardDeactivateGuard],
    children: [
      {path: 'patient-registration',
        loadComponent:()=>
          import('./patient-registration/patient-registration').then(m=>m.PatientRegistrationComponent)
      },
       {path: 'registered-patient',
        loadComponent:()=>
          import('./registered-patient/registered-patient').then(m=>m.RegisteredPatient)
      },
      {path: 'patient-detail',
        loadComponent:()=>
          import('./patient-detail/patient-detail').then(m=>m.PatientDetail)
      }
    ]
  },
  // route for Patient Registration 
  // {
  //   path: 'patient-registration',
  //   loadComponent:()=>
  //     import('./patient-registration/patient-registration').then(m=>m.PatientRegistrationComponent)
    
  // }
];



// Child routes render hone ke liye:

// DashboardComponent ke template me <router-outlet> hona zaroori hai.

// Q3: Difference between loadChildren and loadComponent?

// loadChildren → loads route file or module

// loadComponent → loads single standalone component