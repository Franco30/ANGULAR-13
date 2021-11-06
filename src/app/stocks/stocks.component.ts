import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Stocks } from './stocks';
import { StocksService } from './stocks.service';
import { Meds } from './stockslist';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  stocksForm!: FormGroup;

  stocks!: Stocks;
  stock!: Stocks[];
  pageTitle!: string;
  
  constructor(
    private stocksService: StocksService, 
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.stocksService.getStocks().subscribe(
      (listStocks) => {
        this.stock = listStocks;
        // console.log(listStocks);
      },
      (err) => console.log(err)
      );

    this.initStocksForm(); 

    this.route.paramMap.subscribe(params => {
      const todoId = +params.get('id')!;
      if (todoId) {
        this.getStocks(todoId);
        this.pageTitle = 'Edit Stocks';
      } else {
        this.stocks = {
          id: 0,
          stockName: '',
          quantity: 0,
        };
        this.pageTitle = 'Add Stocks';
      }
    });

  }

  meds: Meds[] = [
    {name: 'Ambroxol', viewValue: 'Ambroxol'},
    {name: 'Cefalexin 250 mg', viewValue: 'Cefalexin 250 mg'},
    {name: 'Biogesic', viewValue: 'Biogesic'},
    {name: 'Cecon 500 mg', viewValue: 'Cecon 500 mg'},
    {name: 'Centrum', viewValue: 'Centrum'},
    {name: 'Amoxicillin', viewValue: 'Amoxicillin'},
    {name: 'Mefenamic', viewValue: 'Mefenamic'},
    {name: 'Conzace', viewValue: 'Conzace'},

  ];

  get s() {
    return this.stocksForm.controls;
  }

  clearForm() {
    this.stocksForm.reset({
      stockName: '',
      quantity: ''
    });
  }

  initStocksForm() {
    this.stocksForm = this.fb.group({
      stockName: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  getStocks(id: number) {
    this.stocksService.getStock(id)
      .subscribe(
        (stocks: Stocks) => {
          this.stocks = stocks;
          this.editStocks(stocks);
          // console.log(id, stocks);
        },
        (err: any) => console.log(err)
      );
  }

  editStocks(stocks: Stocks) {
    this.stocksForm.patchValue({
      stocksName: stocks.stockName,
      quantity: stocks.quantity
    });
  }

  onSubmit(): void {

    this.mapFormValuesToStocksModel();

    if (this.stocks.id) {
        this.stocksService.putStocks(this.stocks).subscribe(
          () => this.router.navigate(['stocks']),
          (err: any) => console.log(err)
        );
        this.ngOnInit();
    } else {
      this.stocksService.postStocks(this.stocks).subscribe(
        () => {
          // console.log(this.stocks)
          this.router.navigate(['stocks']);
      },
        (err: any) => console.log(err)
      );
      this.ngOnInit();
      this.clearForm();
    }

  }

  mapFormValuesToStocksModel() {
    this.stocks.stockName = this.stocksForm.value.stockName;
    this.stocks.quantity = this.stocksForm.value.quantity;
  }

  edit(stockId: number) {
    this.router.navigate(['/stocks/edit', stockId]);
  }

  delete(todoId: number) {
    this.stocksService.deleteStocks(todoId).subscribe(
      () => this.router.navigate(['stocks']),
      (err: any) => console.log(err)
    );
    
    this.ngOnInit();
  }

}
