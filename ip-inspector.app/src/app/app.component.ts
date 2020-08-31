import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ip-inspector';
  logo = require('../assets/img/cvereau-logo.png').default;

  goToGithubRepo() {
    window.location.href = 'https://github.com/cvereau/ip-inspector';
  }
}
