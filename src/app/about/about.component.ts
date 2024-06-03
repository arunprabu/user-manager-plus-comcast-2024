import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [],
})
export class AboutComponent {
  sampleText = 'lorem ipsum dolor sit amet consectetur adipisicing elit.';
  today: Date = new Date();

  newsText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis commodo tellus a tristique. Proin eget lectus facilisis, rhoncus enim vitae, luctus turpis.';
  
  category = "Sports";

  constructor() {}
}
