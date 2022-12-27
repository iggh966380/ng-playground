import { ComponentsComponent } from './components.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent
  },
  {
    path: 'life-cycle',
    component: LifeCycleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
