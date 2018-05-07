import { Component, OnInit } from '@angular/core';
import { Hero, Heroes } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = Heroes;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
    console.log(this.heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
