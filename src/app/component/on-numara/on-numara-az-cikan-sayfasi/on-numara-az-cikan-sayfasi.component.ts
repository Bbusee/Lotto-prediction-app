import { Component, OnInit } from '@angular/core';
import { TekrarTip } from 'src/app/constants/Tekrar-tip';
import { OnNumaraResponse } from 'src/app/models/on-numara.model';
import { OnNumaraService } from 'src/app/on-numara.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-on-numara-az-cikan-sayfasi',
  templateUrl: './on-numara-az-cikan-sayfasi.component.html',
  styleUrls: ['./on-numara-az-cikan-sayfasi.component.scss'],
})
export class OnNumaraAzCikanSayfasiComponent implements OnInit {
  azCikanlar: OnNumaraResponse = [];
  tipAzCikanlar: TekrarTip = TekrarTip.AZ_CIKAN;

  // Sayfalama değişkenleri
  suankiSayfa: number = 1;
  sayfaBasinaElemanSayisi: number = 5; // İhtiyaca göre ayarlayın

  constructor(
    private readonly onNumaraService: OnNumaraService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | On Numara Az Çıkanlar');
  }

  ngOnInit() {
    this.getAzCikanlar();
    this.spinner.show();
  }
  getAzCikanlar() {
    this.onNumaraService
      .tekraraGoreGet(this.tipAzCikanlar)
      .subscribe((data) => {
        this.azCikanlar = data;
        console.log(this.azCikanlar);
        this.spinner.hide();
      });
  }

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
