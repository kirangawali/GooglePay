import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appValidateNumber]'
})
export class ValidateNumberDirective {

  constructor(el : ElementRef) { }

}
