import { NgModule } from '@angular/core';

import { StocksComponent } from './stocks.component';

import { StocksRoutingModule } from './stocks-routing.module';
import { StocksService } from './stocks.service';

import { SharedModule } from '../shared/shared.module';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StocksComponent
  ],
  imports: [
    StocksRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [StocksService],
  exports: [],
})
export class StocksModule { }
