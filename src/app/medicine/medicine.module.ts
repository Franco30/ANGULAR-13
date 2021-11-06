import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicineRoutingModule } from './medicine-routing.module';

import { MedicineComponent } from './medicine.component';
import { MedicinelistComponent } from './medicinelist.component';

import { SharedModule } from '../shared/shared.module';
import { MedicineService } from './medicine.service';


@NgModule({
  declarations: [
    MedicineComponent,
    MedicinelistComponent,
  ],
  imports: [
    CommonModule,
    MedicineRoutingModule,
    SharedModule
  ],
  providers: [MedicineService],
  exports: []
})
export class MedicineModule { }
