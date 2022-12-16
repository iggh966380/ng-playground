import { HeroComponent } from './DI/service/hero.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectivesComponent } from './directives/attribute-directives/attribute-directives.component';

const routes: Routes = [
  {
    path: 'directives',
    component: AttributeDirectivesComponent,
  },
  {
    path: 'di',
    component: HeroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
