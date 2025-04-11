import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string,
    size: number = 120,
    isTruncated: boolean = true
  ): string {
    if (!isTruncated) {
      return value;
    }

    return `${value.slice(0, size)}...`;
  }
}
