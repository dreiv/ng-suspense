import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SuspenseComponent } from './suspense/suspense.component';
import { DefaultViewDirective } from './default-view.directive';
import { FallbackViewDirective } from './fallback-view.directive';
import { ErrorViewDirective } from './error-view.directive';

@NgModule({
  declarations: [
    AppComponent,
    SuspenseComponent,
    DefaultViewDirective,
    FallbackViewDirective,
    ErrorViewDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
