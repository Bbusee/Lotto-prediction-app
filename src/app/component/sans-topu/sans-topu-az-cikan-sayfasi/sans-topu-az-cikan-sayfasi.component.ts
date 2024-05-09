import { Component, OnInit } from '@angular/core';
import { TekrarTip } from 'src/app/constants/Tekrar-tip';
import { SansTopuResponse } from 'src/app/models/sans-topu.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';
import { SansTopuService } from 'src/app/sans-topu.service';

@Component({
  selector: 'app-sans-topu-az-cikan-sayfasi',
  templateUrl: './sans-topu-az-cikan-sayfasi.component.html',
  styleUrls: ['./sans-topu-az-cikan-sayfasi.component.scss'],
})
export class SansTopuAzCikanSayfasiComponent implements OnInit {
  azCikanlar: SansTopuResponse = [];
  tipAzCikanlar: TekrarTip = TekrarTip.AZ_CIKAN;

  constructor(
    private readonly sansTopuService: SansTopuService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | Şans Topu Az Çıkanlar');
  }

  ngOnInit() {
    this.getAzCikanlar();
    this.spinner.show();
  }
  getAzCikanlar() {
    this.sansTopuService
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
