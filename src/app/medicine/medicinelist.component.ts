import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medicine } from './medicine';
import { MedicineService } from './medicine.service';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.scss']
})
export class MedicinelistComponent implements OnInit {
  allMedicine!: Medicine[];
  constructor(
    private medicineService: MedicineService
  ) { }

  ngOnInit(): void {
    this.getAllEmployee();

    this.medicineService.getAllMedicine().subscribe(
      (employeeList) => {
        this.allMedicine = employeeList; 
        console.log(employeeList)
      },
      (err) => console.log(err)
    );
    
  }

  getAllEmployee() {
    this.medicineService.getAllMedicine().subscribe(
      (data: Medicine[]) => {
          this.allMedicine = data;
      });
  }

  //   refreshTodoList() {
  //   this.medicineService.getMedicineList().subscribe((res) => {
  //     this.medicineService.medicine = res as Medicine[];
  //   });
  // }

  edit(medicine : Medicine){
    this.medicineService.selectedMedicine = medicine;
  }

  delete(id: string) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.medicineService.deleteMedicine(id).subscribe((res) => {
        // this.refreshTodoList();
        // this.resetForm(form);
        // this.snackBar.open('Deleted successfully', 'OK', {
        //   duration: 3000
        // })
      });
    }
}

}
