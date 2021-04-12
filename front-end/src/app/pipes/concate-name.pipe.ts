import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concateName'
})
export class ConcateNamePipe implements PipeTransform {

  transform(fname: string, lname:string): string {
    return `${fname} + ${lname}`;
  }

}
