import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChampionComponent } from './card-champion.component';

describe('CardChampionComponent', () => {
  let component: CardChampionComponent;
  let fixture: ComponentFixture<CardChampionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardChampionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardChampionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
