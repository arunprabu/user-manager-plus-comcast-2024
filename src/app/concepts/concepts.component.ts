import { Component } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent {
  // interpolation
  appName = "User Manager Plus Comcast 2024";

  // property binding
  courseName = "Angular 16 - Intermediate Level";

  // event binding
  handleClick() {
    alert('clicked');
  }
}
