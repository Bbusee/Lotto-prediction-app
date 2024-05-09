import { Component, OnInit } from '@angular/core';
import { ZamanTip } from 'src/app/constants/Zaman-tip';
import { SuperLotoService } from 'src/app/super-loto.service';
import { SuperLotoResponse } from 'src/app/models/super-loto.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-super-loto-yakin-zamanda-cikanlar-sayfasi',
  templateUrl: 'super-loto-yakin-zamanda-zamanda-cikanlar-sayfasi.component.html',
  styleUrls: ['./super-loto-yakin-zamanda-zamanda-cikanlar-sayfasi.component.scss'],
})
export class SuperLotoYakinZamandaCikanlarSayfasiComponent implements OnInit {
  yakinZamandaCikanlar: SuperLotoResponse = [];
  tipYakinZamandaCikanlar: ZamanTip = ZamanTip.YAKIN_ZAMANDA_CIKANLAR;
  constructor(
    private readonly superLotoService: SuperLotoService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | Süper Loto Yakın Zamanda Çıkanlar');
  }

  ngOnInit(): void {
    this.getYakinZamandaCikanlar();
    this.spinner.show();
  }

  getYakinZamandaCikanlar() {
    this.superLotoService
      .zamanaGoreGet(this.tipYakinZamandaCikanlar)
      .subscribe((data) => {
        this.yakinZamandaCikanlar = data;
        console.log(this.yakinZamandaCikanlar);
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
    return this.yakinZamandaCikanlar.slice(baslangicIndex, bitisIndex);
  }
}
