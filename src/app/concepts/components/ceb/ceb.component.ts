import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <h3>Custom Event Binding Demo</h3>
      <button (click)="handleSendDataToParentComp()">SEND DATA TO PARENT COMP</button>
    </div>
  `,
  styles: [],
})
export class CebComponent {
  // Step 1: Let's create variable and make it custom event
  // Step 1.1: Let's create an object of EventEmitter class
  // Step 1.2: Let's make it custom event by having @Output() 
  @Output() onReportGenerated: EventEmitter<any> = new EventEmitter();

  // keeping the data here -- so that I can send it later to parent comp
  status = {
    reportId: '435678ghj956789vhjbno',
    message: "Report Generated Successfully!"
  }

  handleSendDataToParentComp() {
    console.log('Preparing to Send the Data to parent comp');
    // Step 2: Trigger / emit the custom event through the program. Along with it, send the data to parent comp
    this.onReportGenerated.emit(this.status);
  }
  
  // step 3: Listen to the triggered event in parent comp -- refer concepts.comp.html 
  // Step 4: Receive the data -- refer concepts.comp.ts 
  // Step 5: Display in html -- refer concepts.comp.html
}
