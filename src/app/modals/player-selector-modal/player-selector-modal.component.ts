import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";
import { PositionSelector } from 'src/app/models/team-selecor';

@Component({
  selector: 'app-player-selector-modal',
  templateUrl: './player-selector-modal.component.html',
  styleUrls: ['./player-selector-modal.component.scss']
})

export class PlayerSelectorModalComponent extends SimpleModalComponent<PositionSelector, PositionSelector> implements OnInit {

  name:string;
  position:string;
  number:number;

  selectedPlayer: PositionSelector

  constructor() { 
    super();
  }

  ngOnInit(): void {
    console.log(this.name)
    console.log(this.position)
    console.log(this.number)
  }

  cancel() {
    this.close();
  }

  confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this.result = this.selectedPlayer;
    this.close();
  }

}
