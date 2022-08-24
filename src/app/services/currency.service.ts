import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private _code: string = 'INR';
  private currencySubject = new BehaviorSubject(this._code);
  currencyObservable = this.currencySubject.asObservable();
  constructor() {}
  updateCurrency(code: string) {
    this._code = code;
    // every data change should be published
    // every data change should be sent to the subscribers
    this.currencySubject.next(this._code);
  }
}