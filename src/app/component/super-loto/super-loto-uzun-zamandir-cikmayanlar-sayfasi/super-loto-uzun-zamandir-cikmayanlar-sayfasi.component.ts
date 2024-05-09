import { Component, OnInit } from '@angular/core';
import { ZamanTip } from 'src/app/constants/Zaman-tip';
import { SuperLotoResponse } from 'src/app/models/super-loto.model';
import { SuperLotoService } from 'src/app/super-loto.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-super-loto-uzun-zamandir-cikmayanlar-sayfasi',
  templateUrl: './super-loto-uzun-zamandir-cikmayanlar-sayfasi.component.html',
  styleUrls: ['./super-loto-uzun-zamandir-cikmayanlar-sayfasi.component.scss'],
})
export class SuperLotoUzunZamandirCikmayanlarSayfasiComponent
  implements OnInit
{
  uzunZamandirCikmayanlar: SuperLotoResponse = [];
  tipUzunZamandirCikmayanlar: ZamanTip = ZamanTip.UZUN_ZAMANDIR_CIKMAYANLAR;

  constructor(
    private superLotoService: SuperLotoService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | Süper Loto Uzun Zamandır Çıkmayanlar');
  }

  ngOnInit(): void {
    this.getUzunZamandir();
    this.spinner.show();
  }
  getUzunZamandir() {
    this.superLotoService
      .zamanaGoreGet(this.tipUzunZamandirCikmayanlar)
      .subscribe((data) => {
        this.uzunZamandirCikmayanlar = data;
        console.log(this.uzunZamandirCikmayanlar);
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
    return this.uzunZamandirCikmayanlar.slice(baslangicIndex, bitisIndex);
  }
}
