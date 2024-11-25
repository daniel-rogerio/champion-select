import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ChampionComponent } from './pages/champions/champions.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'champions', component: ChampionComponent},
  {path: 'login', title: 'Login', component: LoginComponent}
];
