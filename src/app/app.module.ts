import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HideAfterDirective } from './hide-after.directive';
// import { HideAfter2Directive } from './hide-after2.directive';


@NgModule({
  declarations: [AppComponent, HideAfterDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
