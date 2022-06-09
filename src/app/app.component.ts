import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<main>
  //   <h1>Structural Directives</h1>
  //   <section *hideAfter="5000; then placeholder" class="banner primary">
  //     <h3>Start Content</h3>
  //     <p>Will disappear in 5 seconds</p>
  //   </section>
  //   <ng-template #placeholder>
  //     <section class="banner placeholder">
  //       <h3>Second Content</h3>
  //       <p>Appeared after 5 seconds</p>
  //     </section>
  //   </ng-template>
  // </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test angular';
}
