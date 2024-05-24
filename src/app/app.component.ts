import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // exposes the component in a selector -- used in index.html
  templateUrl: './app.component.html', // html 
  styleUrls: ['./app.component.css'] // css 
})
export class AppComponent {
  // ts 
  title = 'user-manager-plus-comcast-2024';
}
