import { Component, OnInit } from '@angular/core';
import { SayisalLotoResponse } from 'src/app/models/sayisal-loto-model';
import { ZamanTip } from 'src/app/constants/Zaman-tip';
import { SayisalLotoService } from 'src/app/sayisal-loto.service';
import { SansTopuResponse } from 'src/app/models/sans-topu.model';
import { SansTopuService } from 'src/app/sans-topu.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sans-topu-uzun-zamandir-cikmayanlar-sayfasi',
  templateUrl: './sans-topu-uzun-zamandir-cikmayanlar-sayfasi.component.html',
  styleUrls: ['./sans-topu-uzun-zamandir-cikmayanlar-sayfasi.component.scss'],
})
export class SansTopuUzunZamandirCikmayanlarSayfasiComponent implements OnInit {
  uzunZamandirCikmayanlar: SansTopuResponse = [];
  tipUzunZamandirCikmayanlar: ZamanTip = ZamanTip.UZUN_ZAMANDIR_CIKMAYANLAR;

  constructor(
    private sansTopuService: SansTopuService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | Şans Topu Uzun Zamandır Çıkmayanlar');
  }

  ngOnInit(): void {
    this.getUzunZamandir();
    this.spinner.show();
  }
  getUzunZamandir() {
    this.sansTopuService
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
