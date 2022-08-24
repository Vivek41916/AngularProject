import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {

  // value | conversion:args1:args2....
  transform(value: number, code: string) {
    // return something always
    switch (code) {
      case 'USD':
        return (value *= 0.013);
      case 'EUR':
        return (value *= 0.012);
      case 'CAD':
        return (value *= 0.016);
      case 'GBP':
        return (value *= 0.01);
      default:
        return value;
    }
  }

}
