import { Component, OnInit } from '@angular/core';
import { TekrarTip } from 'src/app/constants/Tekrar-tip';
import { SansTopuResponse } from 'src/app/models/sans-topu.model';
import { SansTopuService } from 'src/app/sans-topu.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sans-topu-cok-cikan-sayfasi',
  templateUrl: './sans-topu-cok-cikan-sayfasi.component.html',
  styleUrls: ['./sans-topu-cok-cikan-sayfasi.component.scss'],
})
export class SansTopuCokCikanSayfasiComponent implements OnInit {
  cokCikanlar: SansTopuResponse = [];
  tipCokCikanlar: TekrarTip = TekrarTip.COK_CIKAN;

  constructor(
    private readonly sansTopuService: SansTopuService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | Şans Topu Çok Çıkanlar');
  }

  ngOnInit() {
    this.getAzCikanlar();
    this.spinner.show();
  }
  getAzCikanlar() {
    this.sansTopuService
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
