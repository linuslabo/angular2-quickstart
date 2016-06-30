import { Component } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' }
];

/*  Every Angular app has at least one root component, conventionally named AppComponent,
    that hosts the client user experience. Components are the basic building blocks of Angular applications.
    A component controls a portion of the screen — a view — through its associated template. */

/*  @Component is a decorator that allows us to associate metadata with the component class.
    The metadata tells Angular how to create and use this component. */

@Component({
    selector: 'my-app', //Angular creates and displays an instance of our AppComponent wherever it encounters a my-app element in the host HTML.
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
        <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .heroes li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .heroes li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `],
    directives: [HeroDetailComponent]
    // The template specifies the component's companion template, written in an enhanced form of HTML that tells Angular how to render this component's view.
})

export class AppComponent {
    title = 'Tour of Heroes';
    selectedHero: Hero;
    public heroes = HEROES;

    onSelect(hero: Hero) { this.selectedHero = hero; }
}