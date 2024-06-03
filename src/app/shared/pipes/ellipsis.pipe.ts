import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
  pure: true // when set to false, even if newsText is not updated, it will still re-render the component
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    console.log(value);
    console.log(args);
    value = value.substring(0, args[0]);
    return value + '...';
  }

}
