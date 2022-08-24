import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService,],
})
export class ProductListComponent implements OnInit {
  @Input() selectedCurrency!:string;

 plist: ProductType[]=[];

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private currencyService: CurrencyService
  ) { }

  ngOnInit(): void {
    this.getData();
    this.getCode();
    
  }
  getCode() {
    this.currencyService.currencyObservable.subscribe((code) => {
      this.selectedCurrency = code;
    });
  }
  getData() {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('SUCCESS', data);
        this.plist=data as ProductType[];
      },
      (error) => {
        console.log('ERROR', error);
      }
    );
  }
  
  
  addItem(data: any){
    console.log("Add Item to the cart",data);
    this.router.navigate(['/cart']);
  }

}
