import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// @Injectable({
//   providedIn: 'root' // alternative way of registering a service globally
// })
@Injectable()
export class ProductService {
  // Dependency injection
  constructor(private httpClient: HttpClient) {}
  getProducts() {
    const url =
      'https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json';
    return this.httpClient.get(url);
  }
  doCheckout(data: any) {
    const url = 'https://my-app-2675f-default-rtdb.firebaseio.com/b5-data.json';
    return this.httpClient.post(url, data);
  }
}
