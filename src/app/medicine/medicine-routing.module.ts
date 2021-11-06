import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineComponent } from './medicine.component';
import { MedicinelistComponent } from './medicinelist.component';

const routes: Routes = [
  { path: '', component: MedicinelistComponent },
  { path: 'create', component: MedicineComponent },
  { path: 'edit/:id', component: MedicineComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicineRoutingModule { }
