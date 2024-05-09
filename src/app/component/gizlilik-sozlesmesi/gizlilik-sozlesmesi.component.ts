import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gizlilik-sozlesmesi',
  templateUrl: './gizlilik-sozlesmesi.component.html',
  styleUrls: ['./gizlilik-sozlesmesi.component.scss'],
})
export class GizlilikSozlesmesiComponent {
  constructor(private title: Title) {
    title.setTitle('Loto Tahmin | Gizlilik Sözleşmesi');
  }
}
