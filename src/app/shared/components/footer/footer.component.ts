import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
      <hr />
      <app-menu>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-menu>
      <p>Copyright {{ copyrightYear }} | Arun</p>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  copyrightYear = 2025;
}
