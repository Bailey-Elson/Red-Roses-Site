import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NewsComponent } from './pages/news/news.component';
import { FixturesComponent } from './shared-components/fixtures/fixtures.component';
import { PlayersComponent } from './pages/players/players.component';
import { TeamSelectorComponent } from './pages/team-selector/team-selector.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },
  {
    path:"home",
    component: LandingPageComponent
  },
  {
    path:"news",
    component: NewsComponent
  },
  {
    path:"fixtures",
    component: FixturesComponent
  },
  {
    path:"players",
    component: PlayersComponent
  },
  {
    path:"team-selector",
    component: TeamSelectorComponent
  },
  {
    path:"**",
    redirectTo: "/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
