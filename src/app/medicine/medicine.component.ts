import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Medicine } from './medicine';
import { MedicineService } from './medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss'],
})
export class MedicineComponent implements OnInit {
  allMedicine!: Medicine[];
  constructor(
    public medicineService: MedicineService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetForm();
  }

  createAndUpdate(currentMedicine:Medicine) {
    if(currentMedicine.id != '') {
      console.log('update');
      this.updateMedicine(currentMedicine);
    }else{
      console.log('create');
      this.createMedicine(currentMedicine);
    }
  }

  createMedicine(med: Medicine) {
    this.medicineService.postMedicine(med).subscribe(
      () => this.router.navigate(['home']),
          (err: any) => console.log(err)
          );
    // this.getAllEmployee();
  }
  
  
  updateMedicine(med: Medicine) {
    this.medicineService.putMedicine(med).subscribe();
    // this.getAllEmployee();
  }

  onSubmit(form: NgForm) {
    if (form.value._id == '') {
      this.medicineService.postMedicine(form.value).subscribe(() => {
        this.resetForm(form);
        // this.refreshTodoList();
        // this.snackBar.open('Saved successfully', 'OK', {
        //   duration: 3000
        // })
      });
      console.log(form.value);
    } else {
      this.medicineService.putMedicine(form.value).subscribe((res) => {
        this.resetForm(form);
        // this.refreshTodoList();
        // this.snackBar.open('Updated successfully', 'OK', {
        //   duration: 3000
        // })
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) form.reset(this.medicineService.selectedMedicine);
    this.medicineService.selectedMedicine = {
      id: '',
      medicineType: '',
      medicineName: '',
      medicineCategory: '',
    };
  }

  onUpdate(form: NgForm) {
    if (form.value._id == '') {
      this.medicineService.postMedicine(form.value).subscribe((res) => {
        this.resetForm(form);
        // this.refreshTodoList();
        // this.snackBar.open('Saved successfully', 'OK', {
        //   duration: 3000
        // })
      });
    } else {
      this.medicineService.putMedicine(form.value).subscribe((res) => {
        this.resetForm(form);
        // this.refreshTodoList();
        // this.snackBar.open('Updated successfully', 'OK', {
        //   duration: 3000
        // })
      });
    }
  }

}
