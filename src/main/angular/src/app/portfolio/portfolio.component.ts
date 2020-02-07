import { Component, OnInit } from '@angular/core';


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

  constructor() { }

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

}
