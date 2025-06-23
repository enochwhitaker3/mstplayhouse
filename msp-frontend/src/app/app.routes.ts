import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CurrentlyShowingComponent } from './features/currently-showing/currently-showing.component';
import { AboutUsComponent } from './features/about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'currently-showing', component: CurrentlyShowingComponent },
  { path: 'about-us', component: AboutUsComponent },
];
