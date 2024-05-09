import { Component, OnInit } from '@angular/core';
import { SayisalLotoService } from './sayisal-loto.service';
import { TahminTip } from './constants/tahmin-tip';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    // private readonly tahimService: SayisalLotoService,
    private title: Title
  ) {
    // title.setTitle(
    //   'Loto Tahmin | Sayısal Loto | Süper Loto | On Numara | Şans Topu | İstatistik'
    // );
  }
  ngOnInit(): void {
    // this.tahimService
    //   .tahminGet(TahminTip.AZ_CIKAN)
    //   .subscribe((data) => console.log(data));
  }
}
