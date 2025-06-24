import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CurrentlyShowingComponent } from './features/currently-showing/currently-showing.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { GetTicketsComponent } from './features/get-tickets/get-tickets.component';
import { AuditionsComponent } from './features/auditions/auditions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'currently-showing', component: CurrentlyShowingComponent },
  { path: 'currently-showing/:id', component: CurrentlyShowingComponent },
  { path: 'get-tickets', component: GetTicketsComponent },
  { path: 'auditions', component: AuditionsComponent },
  { path: 'about-us', component: AboutUsComponent },
];