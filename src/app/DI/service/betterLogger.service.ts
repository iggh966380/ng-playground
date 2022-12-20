import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';
import { Logger } from './logger.service';

@Injectable()
export class BetterLogger extends Logger {
  constructor(private userService: HeroService) {
    super();
  }

  override log(message: any) {
    const hero = this.userService.getHero();
    super.log(`message to ${hero.name}`);
  }
}
