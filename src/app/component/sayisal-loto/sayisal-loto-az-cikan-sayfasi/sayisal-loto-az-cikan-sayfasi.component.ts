import { Component, OnInit } from '@angular/core';
import { SayisalLotoResponse } from 'src/app/models/sayisal-loto-model';
import { TekrarTip } from 'src/app/constants/Tekrar-tip';
import { SayisalLotoService } from 'src/app/sayisal-loto.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sayisal-loto-az-cikan-sayfasi',
  templateUrl: './sayisal-loto-az-cikan-sayfasi.component.html',
  styleUrls: ['./sayisal-loto-az-cikan-sayfasi.component.scss'],
})
export class SayisalLotoAzCikanSayfasiComponent implements OnInit {
  azCikanlar: SayisalLotoResponse = [];
  tipAzCikanlar: TekrarTip = TekrarTip.AZ_CIKAN;

  constructor(
    private readonly sayisalLotoService: SayisalLotoService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | Sayısal Loto Az Çıkanlar');
  }

  ngOnInit() {
    this.getAzCikanlar();
    this.spinner.show();
  }
  getAzCikanlar() {
    this.sayisalLotoService
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
