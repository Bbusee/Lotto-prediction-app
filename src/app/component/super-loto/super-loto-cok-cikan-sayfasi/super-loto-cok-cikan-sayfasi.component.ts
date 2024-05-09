import { Component, OnInit } from '@angular/core';
import { SuperLotoResponse } from 'src/app/models/super-loto.model';
import { TekrarTip } from 'src/app/constants/Tekrar-tip';
import { SuperLotoService } from 'src/app/super-loto.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-super-loto-cok-cikan-sayfasi',
  templateUrl: './super-loto-cok-cikan-sayfasi.component.html',
  styleUrls: ['./super-loto-cok-cikan-sayfasi.component.scss'],
})
export class SuperLotoCokCikanSayfasiComponent implements OnInit {
  cokCikanlar: SuperLotoResponse = [];
  tipCokCikanlar: TekrarTip = TekrarTip.COK_CIKAN;

  constructor(
    private readonly superLotoService: SuperLotoService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | Süper Loto Çok Çıkanlar');
  }

  ngOnInit() {
    this.getCokCikanlar();
    this.spinner.show();
  }
  getCokCikanlar() {
    this.superLotoService
      .tekraraGoreGet(this.tipCokCikanlar)
      .subscribe((data) => {
        this.cokCikanlar = data;
        console.log(this.cokCikanlar);
        this.spinner.hide();
      });
  }

  // Sayfalama değişkenleri
  suankiSayfa: number = 1;
  sayfaBasinaElemanSayisi: number = 5; // İhtiyaca göre ayarlayın

  // Sayfa değişikliğini yöneten fonksiyon
  sayfaDegistir(sayfa: number) {
    this.suankiSayfa = sayfa;
  }

  // Mevcut sayfadaki veriyi almak için fonksiyon
  mevcutSayfaVerisiniAl(): any[] {
    const baslangicIndex =
      (this.suankiSayfa - 1) * this.sayfaBasinaElemanSayisi;
    const bitisIndex = baslangicIndex + this.sayfaBasinaElemanSayisi;
    return this.cokCikanlar.slice(baslangicIndex, bitisIndex);
  }
}
