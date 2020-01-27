import { Directive, ElementRef, Input   } from '@angular/core';

@Directive({
  selector: '[appTimeline]'
})
export class TimelineDirective {

  @Input() timelineColor: string;

  constructor(element: ElementRef) {

    console.log(this);
    element.nativeElement.style.borderLeft = '3px solid blue';

  }

}
