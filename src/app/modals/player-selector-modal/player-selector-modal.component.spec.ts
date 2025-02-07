import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSelectorModalComponent } from './player-selector-modal.component';

describe('PlayerSelectorModalComponent', () => {
  let component: PlayerSelectorModalComponent;
  let fixture: ComponentFixture<PlayerSelectorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSelectorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSelectorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
