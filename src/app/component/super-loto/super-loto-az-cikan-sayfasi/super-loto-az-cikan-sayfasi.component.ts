import { Component, OnInit } from '@angular/core';
import { TekrarTip } from 'src/app/constants/Tekrar-tip';
import { SuperLotoResponse } from 'src/app/models/super-loto.model';
import { SuperLotoService } from 'src/app/super-loto.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-super-loto-az-cikan-sayfasi',
  templateUrl: './super-loto-az-cikan-sayfasi.component.html',
  styleUrls: ['./super-loto-az-cikan-sayfasi.component.scss'],
})
export class SuperLotoAzCikanSayfasiComponent implements OnInit {
  azCikanlar: SuperLotoResponse = [];
  tipAzCikanlar: TekrarTip = TekrarTip.AZ_CIKAN;

  constructor(
    private readonly superLotoService: SuperLotoService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | Süper Loto Az Çıkanlar');
  }

  ngOnInit() {
    this.getAzCikanlar();
    this.spinner.show();
  }
  getAzCikanlar() {
    this.superLotoService
      .tekraraGoreGet(this.tipAzCikanlar)
      .subscribe((data) => {
        this.azCikanlar = data;
        console.log(this.azCikanlar);
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
    return this.azCikanlar.slice(baslangicIndex, bitisIndex);
  }
}
