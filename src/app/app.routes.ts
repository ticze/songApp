import { Routes } from "@angular/router";
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/search.component';

export const ROUTES: Routes= [
  { path:'home', component: HomeComponent },
  { path:'search', component:SearchComponent },
  { path:'', pathMatch:'full', redirectTo:'home'},
  { path:'**', pathMatch:'full', redirectTo:'home' }
]
