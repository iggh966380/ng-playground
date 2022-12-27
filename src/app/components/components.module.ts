import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ComponentsComponent],
  imports: [CommonModule, ComponentsRoutingModule],
  providers: [],
})
export class ComponentsModule {}
