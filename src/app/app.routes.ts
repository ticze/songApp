import { Routes } from "@angular/router";
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/search.component';
import { ArtistaComponent } from './Components/artista/artista.component';

export const ROUTES: Routes= [
  { path:'home', component: HomeComponent },
  { path:'search', component:SearchComponent },
  { path:'artist/:id', component: ArtistaComponent },
  { path:'', pathMatch:'full', redirectTo:'home'},
  { path:'**', pathMatch:'full', redirectTo:'home' }
]
