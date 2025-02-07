import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerSelectorModalComponent } from './player-selector-modal/player-selector-modal.component';



@NgModule({
  declarations: [PlayerSelectorModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PlayerSelectorModalComponent
  ]
})
export class ModalsModule { }
