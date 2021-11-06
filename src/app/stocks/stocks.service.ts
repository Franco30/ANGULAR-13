import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stocks } from './stocks';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  constructor(private http: HttpClient) {}

  readonly baseURL = 'http://localhost:3000/stocks';

  getStocks(): Observable<Stocks[]> {
    return this.http.get<Stocks[]>(this.baseURL);
  }

  getStock(id: number): Observable<Stocks> {
    return this.http.get<Stocks>(`${this.baseURL}/${id}`);
  }

  postStocks(stocks: Stocks): Observable<Stocks> {
    return this.http.post<Stocks>(this.baseURL, stocks, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  putStocks(stocks: Stocks) {
    return this.http.put(this.baseURL + `/${stocks.id}`, stocks);
  }

  deleteStocks(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
