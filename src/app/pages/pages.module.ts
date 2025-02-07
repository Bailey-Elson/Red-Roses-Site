import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { NewsComponent } from './news/news.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { PlayersComponent } from './players/players.component';
import { TeamSelectorComponent } from './team-selector/team-selector.component';
import { ModalsModule } from './../modals/modals.module'


@NgModule({
  declarations: [LandingPageComponent, NewsComponent, FixturesComponent, PlayersComponent, TeamSelectorComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    ModalsModule
  ]
})
export class PagesModule { }
