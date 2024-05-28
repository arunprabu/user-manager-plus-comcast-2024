import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorizer]', // attribute selector
})
export class ColorizerDirective {
  divEl: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log('Inside ColorizerDirective constructor');
    // Finding out the element on which appColorizer directive is used
    console.log(this.elementRef.nativeElement);
    this.divEl = this.elementRef.nativeElement;

    this.colorizeElement();
    this.createPara();
  }

  colorizeElement() {
    this.renderer.setStyle(this.divEl, 'background-color', 'red');
    this.renderer.setStyle(this.divEl, 'height', '400px');
    this.renderer.setStyle(this.divEl, 'color', '#fff');
    this.renderer.setStyle(this.divEl, 'text-align', 'center');
  }

  createPara() {
    const para = this.renderer.createElement('p'); //  <p></p>
    const poweredByText = this.renderer.createText(
      'Powered by Colorizer Directive'
    ); // Powered by Colorizer Directive

    this.renderer.appendChild(para, poweredByText); // <p>Powered by Colorizer Directive</p>
    this.renderer.appendChild(this.divEl, para);
  }

  // Handle the event inside directive -- click
  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    console.log(event.target);
    this.renderer.setStyle(event.target, 'background-color', 'yellow');
    this.renderer.setStyle(event.target, 'color', '#000');
  }

  // Handle the event inside directive -- mouseover
  @HostListener('mouseover', ['$event'])
  handleMouseover(event: Event) {
    console.log(event.target);
    this.renderer.setStyle(event.target, 'background-color', 'green');
    this.renderer.setStyle(event.target, 'color', '#fff');
  }

  // TODO: try mouseout -- change the bg color
  // TODO: Learn about @HostBinding()
  // TODO: try handling values of the attribute directive
  // Ref: https://github.com/arunprabu/employee-mgmt-ng-oct2022/blob/master/src/app/unit-testing-demo/directives/highlight.directive.ts
  // https://github.com/arunprabu/employee-mgmt-ng-oct2022/blob/master/src/app/unit-testing-demo/components/unit-testing-demo/unit-testing-demo.component.html
}
