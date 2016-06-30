import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

/*  Every Angular app has at least one root component, conventionally named AppComponent,
    that hosts the client user experience. Components are the basic building blocks of Angular applications.
    A component controls a portion of the screen — a view — through its associated template. */

/*  @Component is a decorator that allows us to associate metadata with the component class.
    The metadata tells Angular how to create and use this component. */

@Component({
    selector: 'my-heroes', //Angular creates and displays an instance of our AppComponent wherever it encounters a my-app element in the host HTML.
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
    // The template specifies the component's companion template, written in an enhanced form of HTML that tells Angular how to render this component's view.
})
export class HeroesComponent implements OnInit {

    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    constructor(private router: Router, private heroService: HeroService) { }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}