import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-joker-top',
  templateUrl: './joker-top.component.html',
  styleUrls: ['./joker-top.component.scss'],
})
export class JokerTopComponent {
  @Input() topNumber: string | number = '';
}
