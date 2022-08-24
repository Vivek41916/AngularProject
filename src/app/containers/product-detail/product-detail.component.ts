import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      console.log('PID', params.get('pid'));
    });
    // query params : /detail/1000?rating=4&pincode=123456
    this.activeRoute.queryParamMap.subscribe((params) => {
      console.log('RATING', params.get('rating'));
      console.log('PINCODE', params.get('pincode'));
    });
  }

}
