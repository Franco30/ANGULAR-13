import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  selectedMedicine!: Medicine;
  medicine!: Medicine[];

  readonly baseURL = 'http://localhost:3000';

  currentMedicine: Medicine = {
    id: '',
    medicineType: '',
    medicineName: '',
    medicineCategory: ''
  }

  constructor(
    private http: HttpClient
  ) { }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
    } else {
        console.error('Server Side Error :', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
}

  // postMedicine(medicine : Medicine){
  //   return this.http.post(this.baseURL, medicine);
  // }

  getAllMedicine():Observable<Medicine[]>{
    return this.http.get<Medicine[]>(`${this.baseURL}/medicine`).pipe(catchError(this.handleError));
  }

  postMedicine(medicine: Medicine): Observable<Medicine> {
    console.log(medicine);
    return this.http.post<Medicine>(`${this.baseURL}/medicine`, medicine);
  }

  getMedicineList() {
    return this.http.get(`${this.baseURL}/medicine`);
  }

  putMedicine(medicine: Medicine) {
    return this.http.put(`${this.baseURL}/medicine` + `/${medicine.id}`, medicine);
  }

  deleteMedicine(id: string) {
    return this.http.delete(`${this.baseURL}/medicine` + `/${id}`);
  }
  
}
