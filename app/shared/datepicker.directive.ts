import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[datepicker]' })
export class DatePickerDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        jQuery(el.nativeElement).datepicker({ dateFormat: 'yy-mm-dd' });
    }
}