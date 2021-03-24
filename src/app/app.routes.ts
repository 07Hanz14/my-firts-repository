import { RouterModule, Routes } from '@angular/router';

// needed path
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { SpacecraftsComponent } from './components/spacecrafts/spacecrafts.component';

const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'spacecrafts', component: SpacecraftsComponent},
    {path: 'about', component: AboutComponent}

];


export const APP_ROUTING = RouterModule.forRoot(ROUTES, {useHash: true});