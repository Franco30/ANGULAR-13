import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmployeeService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: 
      [
        EmployeeService
      ]
    }).compileComponents();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

function service(service: any) {
  throw new Error('Function not implemented.');
}
