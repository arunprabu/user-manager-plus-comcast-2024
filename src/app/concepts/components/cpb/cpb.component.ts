import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  template: `
    <div>
      <!-- Step 3 of CPB: Display the data in child comp in child comp -->
      <p>My age: {{ age }}</p>
    </div>
  `,
  styles: [],
})
export class CpbComponent {
  // Step 1 of CPB: We have to create custom property in child comp
  @Input() age = 20; // @Input() will make it a custom property

  // For Step 2  of CPB: Refer concepts.component.html
}
