import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayerSelectorComponent } from './player-selector/player-selector.component';



@NgModule({
  declarations: [PlayerProfileComponent, FixturesComponent, NavBarComponent, FooterComponent, PlayerSelectorComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    FixturesComponent,
    PlayerProfileComponent,
    NavBarComponent,
    FooterComponent,
    PlayerSelectorComponent
  ]
})
export class SharedComponentsModule { }
