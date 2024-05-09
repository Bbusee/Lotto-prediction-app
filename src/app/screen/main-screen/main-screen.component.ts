import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
})
export class MainScreenComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService, private title: Title) {
    title.setTitle(
      'Loto Tahmin | Sayısal Loto | Süper Loto | On Numara | Şans Topu | İstatistik'
    );
  }

  ngOnInit(): void {
    this.spinner.show();
  }
}
