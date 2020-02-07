import { Component, OnInit } from '@angular/core';
import {StockService} from "../stock.service";
import {HttpErrorResponse} from "@angular/common/http";
import * as moment from "moment";

export class PortfolioRow {
  rowIndex: number;
  symbol: string;
  name: string;
  amount: number;
  currency: string;
  buyDate: Date;
  buyPrice: number;
  buyValue: number;
  latestDate: Date;
  latestPrice: number;
  latestValue: number;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioRows: PortfolioRow[];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    let row1 = new PortfolioRow();
    row1.rowIndex = 0;
    row1.symbol = "AAPL";
    row1.amount = 10;
    row1.currency = "USD";
    // row1.buyDate = ;
    row1.buyPrice = 12.34;
    row1.buyValue = row1.amount * row1.buyPrice;
    // row1.latestDate = ;
    // row1.latestPrice = 12.34;
    // row1.latestValue = row1.amount * row1.buyPrice;
    let row2 = new PortfolioRow();
    row2.rowIndex = 0;
    row2.symbol = "GOOG";
    row2.amount = 15;
    row2.currency = "USD";
    // row1.buyDate = ;
    row2.buyPrice = 123.45;
    row2.buyValue = row2.amount * row2.buyPrice;
    // row1.latestDate = ;
    // row1.latestPrice = 12.34;
    // row1.latestValue = row1.amount * row1.buyPrice;
    this.portfolioRows = [row1, row2];
  }

  refreshPortfolioPrices(): void {
    this.retrieveLatestPrice(this.portfolioRows, () => {});
  }

  /**
   * Retrieve latest prices for stocks with keys.
   * @param keys List of stock keys.
   * @param stockMap Map with stocks, indexed with keys.
   * @param onCompleted Callback when retrieval is complete.
   */
  private retrieveLatestPrice(rows: PortfolioRow[], onCompleted: () => void) {
    if (rows.length > 0) {
      let row: PortfolioRow = rows[0];
      this.stockService.getStockLatestPrice(row.symbol).subscribe(response => {
        let date = moment().startOf("day").toDate()
        row.latestDate = date;
        row.latestPrice = response.latestPrice;
        row.latestValue = row.amount * row.latestPrice;
        this.retrieveLatestPrice(rows.slice(1), onCompleted);
      },
        (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.retrieveLatestPrice(rows.slice(1), onCompleted);
          } else {
            onCompleted();
          }
        },
        () => {}
        );
    } else {
      onCompleted();
    }
  }
}
