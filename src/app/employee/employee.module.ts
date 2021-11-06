import { NgModule } from '@angular/core';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';

import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeesComponent } from './list-employees.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateEmployeeComponent,
    ListEmployeesComponent
  ],
  imports: [
    EmployeeRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [EmployeeService],
  exports: []
})
export class EmployeeModule { }
