import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FirstLetterUppercasePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'firstLetterUppercase',
})
export class FirstLetterUppercasePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
  }
}
