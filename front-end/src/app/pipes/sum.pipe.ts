import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(items:any): unknown {
    let total = 0;
    items.forEach(function(item :any, index:any){
        total += item;
    });

    return  total ;
  }

}
