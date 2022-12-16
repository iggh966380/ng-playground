import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DirectivesModule } from './directives/directives.module';

import { AppComponent } from './app.component';
import { DIModule } from './DI/di.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DirectivesModule, DIModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
