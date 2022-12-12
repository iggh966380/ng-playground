import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { HighlightDirective } from './attribute-directives/highlight.directive';

@NgModule({
  declarations: [
    AttributeDirectivesComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
