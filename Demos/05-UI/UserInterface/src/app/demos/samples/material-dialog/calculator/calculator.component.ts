import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CurrencyService } from './currency.service';
import { CalcParam } from './calculatorParam.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  rates: Map<string, number> = new Map<string, number>();
  currencies: string[] = [];
  selectedCurrency = 'THB';
  rate: number;
  converted: number;
  fcAmount = new FormControl(this.data.amount);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CalcParam,
    private cs: CurrencyService
  ) {}

  onNoClick(): void {}

  ngOnInit() {
    this.cs.getRates().subscribe((data) => {
      this.getCurrencies(data.rates);
      this.calculate();
    });
  }

  getCurrencies(rates: any) {
    Object.keys(rates).forEach((prop) => {
      this.currencies.push(prop);
      this.rates.set(prop, rates[prop]);
    });
  }

  calculate() {
    this.rate = this.rates.get(this.selectedCurrency);
    this.converted = this.data.amount / this.rate;
  }

  getRate(curr: string): number {
    const rate = this.rates.get(curr);
    return rate;
  }
}
