import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ekstra-top',
  templateUrl: './ekstra-top.component.html',
  styleUrls: ['./ekstra-top.component.scss'],
})
export class EkstraTopComponent {
  @Input() topNumber: string | number = '';
}
