import { BetterLogger } from './service/betterLogger.service';
import { Logger } from './service/logger.service';
import { HeroService } from './service/hero.service';
import { HeroComponent } from './service/hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule],
  providers: [{ provide: HeroService }],
})
export class DIModule {}
