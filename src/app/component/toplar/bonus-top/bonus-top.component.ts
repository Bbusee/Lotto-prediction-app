import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bonus-top',
  templateUrl: './bonus-top.component.html',
  styleUrls: ['./bonus-top.component.scss'],
})
export class BonusTopComponent {
  @Input() topNumber: string | number = '';
}
