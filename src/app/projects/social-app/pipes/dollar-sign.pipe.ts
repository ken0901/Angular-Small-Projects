import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollarSign',
  standalone:true
})
export class DollarSignPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // Append a dollar sign
    return `$${value}`;
  }

}
