import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRemoveHost]'
})
export class RemoveHostDirective {
  constructor(private el: ElementRef) {
    throw new Error();
    console.log("initted remove host ");
  }

  //wait for the component to render completely
   ngOnInit() {
    console.log("initted remove host ");
      var nativeElement: HTMLElement = this.el.nativeElement,
          parentElement: HTMLElement = nativeElement.parentElement;
      // move all children out of the element
      while (nativeElement.firstChild) {
          parentElement.insertBefore(nativeElement.firstChild, nativeElement);
      }
      // remove the empty element(the host)
      parentElement.removeChild(nativeElement);
  }
}