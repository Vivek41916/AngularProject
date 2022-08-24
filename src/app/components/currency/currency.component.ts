import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrencyService } from "src/app/services/currency.service";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  //@Output() selected = new EventEmitter;
  currencyCodes = ['INR', 'USD', 'EUR', 'GBP', 'CAD'];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
  }
  changeCurrency(event: Event){
    const ele=event.target as HTMLSelectElement;
    this.currencyService.updateCurrency(ele.value)
  }

}
