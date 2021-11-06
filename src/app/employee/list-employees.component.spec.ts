import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListEmployeesComponent } from './list-employees.component';
import { EmployeeService } from './employee.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('ListEmployeesComponent', () => {
  let fixture: ComponentFixture<ListEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: 
      [
        HttpClientTestingModule
      ],
      providers: 
      [
        Function,
        EmployeeService, 
        RouterTestingModule, 
        RouterModule,
        HttpClientModule,
        Router
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeesComponent);
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
function component(component: any) {
  throw new Error('Function not implemented.');
}

