import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowedlength =8;
  title = 'sampleapp';
  currentCurrency: string = 'INR';
  setCurrency(code: string) {
    this.currentCurrency = code;
  }
}
