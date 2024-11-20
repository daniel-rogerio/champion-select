import { Component, Input } from '@angular/core';
import { NgFor, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-card-champion',
  standalone: true,
  imports: [NgFor, TitleCasePipe],
  templateUrl: './card-champion.component.html',
  styleUrl: './card-champion.component.css'
})
export class CardChampionComponent {

  @Input() championsData!: any;

}
