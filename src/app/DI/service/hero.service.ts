import { Injectable } from '@angular/core';
import { HERO } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHero() {
    return HERO;
  }
}
