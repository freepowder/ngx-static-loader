import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'arf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-static-loader-app';
  module = environment.addModule;
  static = environment.useStatic;
  staticSafe = environment.useStaticSafe;
  staticSafe2 = environment.useStaticSafe2;
  withMarkup = environment.withMarkup;
  constructor() {
  }
}
