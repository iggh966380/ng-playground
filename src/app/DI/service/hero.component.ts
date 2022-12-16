import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
  constructor(private hs: HeroService) {}

  ngOnInit(): void {
    console.log(this.hs.getHero());
  }
}
