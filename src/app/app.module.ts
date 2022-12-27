import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DirectivesModule } from './directives/directives.module';

import { AppComponent } from './app.component';
import { DIModule } from './DI/di.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivesModule,
    DIModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
