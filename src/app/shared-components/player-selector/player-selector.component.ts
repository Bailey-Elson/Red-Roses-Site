import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PositionSelector } from "./../../models/team-selecor"

@Component({
  selector: 'app-player-selector',
  templateUrl: './player-selector.component.html',
  styleUrls: ['./player-selector.component.scss']
})
export class PlayerSelectorComponent implements OnInit {

  @Input() positionData: PositionSelector;
  @Output() positionSelected = new EventEmitter<PositionSelector>();

  constructor() { }

  ngOnInit(): void {}

  positionClicked () {
    this.positionSelected.emit(this.positionData)
  }

}
