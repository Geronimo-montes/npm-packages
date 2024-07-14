import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dmRestApiHelper',
  standalone: true
})
export class DmRestApiHelperPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
