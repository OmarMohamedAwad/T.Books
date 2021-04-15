import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform(items: any): unknown {
    let total = 0;
    var count = 0;
    items.forEach(function(item :any, index:any){
        total += item;
        count++;
    });

return  total / count;

  }

}
