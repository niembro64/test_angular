import { Component } from '@angular/core';
import { VERSION } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = `Changing Content | Angular Version: ${VERSION.full}`;
}
