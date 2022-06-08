import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<main>
    <h1>Structural Directives</h1>
    <!-- <section> -->
    <!-- <section *hideAfter="5000" class="banner primary"> -->
    <section *hideAfter="5000; then placeholder" class="banner primary">
      <h3>Temp Content</h3>
      <p>Disappear in 5 seconds</p>
    </section>
    <ng-template #placeholder>
      <section class="banner placeholder">
        <h3>Second Content</h3>
        <p>Appear after 5 seconds</p>
      </section>
    </ng-template>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'test_angular';
  title = 'test angular';
}
