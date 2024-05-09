import { Component, OnInit } from '@angular/core';
import { TekrarTip } from 'src/app/constants/Tekrar-tip';
import { OnNumaraResponse } from 'src/app/models/on-numara.model';
import { OnNumaraService } from 'src/app/on-numara.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-on-numara-cok-cikan-sayfasi',
  templateUrl: './on-numara-cok-cikan-sayfasi.component.html',
  styleUrls: ['./on-numara-cok-cikan-sayfasi.component.scss'],
})
export class OnNumaraCokCikanSayfasiComponent implements OnInit {
  cokCikanlar: OnNumaraResponse = [];
  tipCokCikanlar: TekrarTip = TekrarTip.COK_CIKAN;

  constructor(
    private readonly onNumaraService: OnNumaraService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | On Numara Çok Çıkanlar');
  }

  ngOnInit() {
    this.getCokCikanlar();
    this.spinner.show();
  }

  getCokCikanlar() {
    this.onNumaraService
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
