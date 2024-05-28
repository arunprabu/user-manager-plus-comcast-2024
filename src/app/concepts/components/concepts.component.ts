import { Component } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [],
})
export class ConceptsComponent {
  // interpolation
  appName = 'User Manager Plus Comcast 2024';

  // property binding
  courseName = 'Angular 16 - Intermediate Level';

  // two way binding
  city = 'Pune';

  // custom property binding
  personAge = 100;

  // custom event binding
  dataReceivedFromChildComp: any;

  // for *ngIf
  isLoggedIn = false;

  // for *ngFor
  skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Angular"
  ];

  // event binding
  handleClick(event: any) {
    // the entire event object
    // TODO: disable the button
    // TODO: change the lable of the button to "Clicked"
    console.log(event);
  }

  // Reeiving the data in parent comp ts
  handleReportGenerated(event: any){  
    console.log(event);
    this.dataReceivedFromChildComp = event;
  }
}
