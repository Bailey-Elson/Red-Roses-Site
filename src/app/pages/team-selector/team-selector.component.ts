import { Component, OnInit, inject } from '@angular/core';
import { PositionSelector, teamSheet } from "./../../models/team-selecor"
import { PlayerSelectorModalComponent } from 'src/app/modals/player-selector-modal/player-selector-modal.component';
import { SimpleModalService } from 'ngx-simple-modal';

@Component({
  selector: 'app-team-selector',
  templateUrl: './team-selector.component.html',
  styleUrls: ['./team-selector.component.scss'],
})
export class TeamSelectorComponent implements OnInit {
  teamsheet:Array<PositionSelector> = teamSheet
  positionData: PositionSelector

  constructor(private SimpleModalService: SimpleModalService ) {}
  
  ngOnInit(): void {}

  positionSelected(position:PositionSelector) {
    this.openModal(position)
  }

  openModal(position:PositionSelector): void {
    this.SimpleModalService.addModal(PlayerSelectorModalComponent, position)
      .subscribe((message) => {
        // We get modal result
        console.log(message);
      });
  }

}
