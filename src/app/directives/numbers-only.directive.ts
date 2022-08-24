import { Directive, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appNumbersOnly]',
})
export class NumbersOnlyDirective {
  // 1. if you use property binding, the right hand side will be evaluated : [property]="variable"
  // 2. if we do not use property binding, the right hand side becomes optional : property
  // 3. if we do not use property binding, the right hand side will not be evaluated : property="value"
  // <input type="text" appNumbersOnly />

  @Input() appNumbersOnly!: string | number;

  constructor() {}
  @HostListener('keypress', ['$event'])
  restrictToNumbers(event: KeyboardEvent) {
    const ele = event.target as HTMLInputElement;
    const length = ele.value.length;
    if (  length >= Number(this.appNumbersOnly) || event.keyCode < 48 || event.keyCode > 57) {
      // non-numerics
      event.preventDefault(); // used to cancel the default behavior of any event
    }
  }
}