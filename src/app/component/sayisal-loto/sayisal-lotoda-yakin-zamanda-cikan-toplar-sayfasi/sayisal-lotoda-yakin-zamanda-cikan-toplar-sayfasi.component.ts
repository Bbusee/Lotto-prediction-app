import { Component, OnInit } from '@angular/core';
import { SayisalLotoResponse } from 'src/app/models/sayisal-loto-model';
import { ZamanTip } from 'src/app/constants/Zaman-tip';
import { SayisalLotoService } from 'src/app/sayisal-loto.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sayisal-lotoda-yakin-zamanda-cikan-toplar-sayfasi',
  templateUrl:
    './sayisal-lotoda-yakin-zamanda-cikan-toplar-sayfasi.component.html',
  styleUrls: [
    './sayisal-lotoda-yakin-zamanda-cikan-toplar-sayfasi.component.scss',
  ],
})
export class SayisalLotodaYakinZamandaCikanToplarSayfasiComponent
  implements OnInit
{
  yakinZamandaCikanlar: SayisalLotoResponse = [];
  tipYakinZamandaCikanlar: ZamanTip = ZamanTip.YAKIN_ZAMANDA_CIKANLAR;
  constructor(
    private readonly sayisalLotoService: SayisalLotoService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | Sayısal Loto Yakın Zamanda Çıkanlar');
  }

  ngOnInit(): void {
    this.getYakinZamandaCikanlar();
    this.spinner.show();
  }

  getYakinZamandaCikanlar() {
    this.sayisalLotoService
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
