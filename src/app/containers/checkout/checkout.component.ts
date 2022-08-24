import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers:[ProductService]
})
export class CheckoutComponent implements OnInit {
  EMAIL_REGEX =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  checkoutForm = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(5)]),
    email: new FormControl('abc@xyz.com',[Validators.required,Validators.pattern(this.EMAIL_REGEX)]),
    pincode: new FormControl(null, [
      Validators.required,
      this.zipcodeValidator(),
    ]),
  });

  

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }


  zipcodeValidator() {
    return (control: FormControl) => {
      if (!control.value ||control.value == 123456) {
        // valid
        return null;
      }
      // invalid
      return {
        // name_of_error:information_related_to_error
        zipcode: {
          allowedCode: 123456,
          enteredCode: control.value,
        },
      };
    };
  }
  submitData() {
    if(this.checkoutForm.valid){
      console.log('form submission logic here',this.checkoutForm.value);
      this.productService.doCheckout(this.checkoutForm.value).subscribe(
        (data) => {
          console.log('SUCCESS', data);
        },
        (error) => {
          console.log('ERROR', error);
        }
      );
    }
    else{
      console.log('form messages here');
    }
  }
  loadData() {
    const data: any = {
      name: 'qwerty',
      email: 'mail@xyz.com',
      pincode: '123456',
    };
    this.checkoutForm.setValue(data);
  }
  patchData() {
    const data: any = {
      name: 'test',
      email: 'test@xyz.com',
    };
    this.checkoutForm.patchValue(data); // partial data
  }

}
