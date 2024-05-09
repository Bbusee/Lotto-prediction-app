import { Component, OnInit } from '@angular/core';
import { SayisalLotoResponse } from 'src/app/models/sayisal-loto-model';
import { TekrarTip } from 'src/app/constants/Tekrar-tip';
import { SayisalLotoService } from 'src/app/sayisal-loto.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sayisal-lotoda-en-cok-cikan-toplar-sayfasi',
  templateUrl: './sayisal-lotoda-en-cok-cikan-toplar-sayfasi.component.html',
  styleUrls: ['./sayisal-lotoda-en-cok-cikan-toplar-sayfasi.component.scss'],
})
export class SayisalLotodaEnCokCikanToplarSayfasiComponent implements OnInit {
  cokCikanlar: SayisalLotoResponse = [];
  tipCokCikanlar: TekrarTip = TekrarTip.COK_CIKAN;

  constructor(
    private readonly sayisalLotoService: SayisalLotoService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | Sayısal Loto Çok Çıkanlar');
  }

  ngOnInit(): void {
    this.getCokCikan();
    this.spinner.show();
  }

  getCokCikan() {
    this.sayisalLotoService
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
