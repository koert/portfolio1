import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export class StockLatestPriceResponse {
  symbol: string;
  latestPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) {

  }

  getStockLatestPrice(symbol: string): Observable<StockLatestPriceResponse> {
    return this.http.get<StockLatestPriceResponse>(`/stocks/${symbol}/latestPrice`);
  }
}
