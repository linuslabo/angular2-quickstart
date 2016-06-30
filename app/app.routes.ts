import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: 'dashboard',
        terminal: true
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
