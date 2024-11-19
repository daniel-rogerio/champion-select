import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChampionListService } from '../../../services/champion-list.service';
import { ChampionData } from '../../../models/interfaces/ChampionData';
import { Subject, takeUntil } from 'rxjs';
import { CardChampionComponent } from "../card-champion/card-champion.component";
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-champion',
  standalone: true,
  imports: [CardChampionComponent],
  templateUrl: './champion.component.html',
  styleUrl: './champion.component.css'
})
export class ChampionComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  champions!: ChampionData;
  championsList!: any;
  splashArt!: any;

  constructor(private championListService: ChampionListService) { }
  
  ngOnInit(): void {
    this.getChampions();
  }

  getChampions(): void {
    this.championListService.getAll()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        response && (this.champions = response);
        this.championsList = Object.values(this.champions.data)
      },
      error: (error) => console.log(error),
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
