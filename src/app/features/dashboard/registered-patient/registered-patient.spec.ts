import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredPatient } from './registered-patient';

describe('RegisteredPatient', () => {
  let component: RegisteredPatient;
  let fixture: ComponentFixture<RegisteredPatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteredPatient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredPatient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
