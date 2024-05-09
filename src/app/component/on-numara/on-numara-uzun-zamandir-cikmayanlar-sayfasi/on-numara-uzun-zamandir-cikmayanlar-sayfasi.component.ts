import { Component, OnInit } from '@angular/core';
import { ZamanTip } from 'src/app/constants/Zaman-tip';
import { OnNumaraResponse } from 'src/app/models/on-numara.model';
import { OnNumaraService } from 'src/app/on-numara.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-on-numara-uzun-zamandir-cikmayanlar-sayfasi',
  templateUrl: './on-numara-uzun-zamandir-cikmayanlar-sayfasi.component.html',
  styleUrls: ['./on-numara-uzun-zamandir-cikmayanlar-sayfasi.component.scss'],
})
export class OnNumaraUzunZamandirCikmayanlarSayfasiComponent implements OnInit {
  uzunZamandirCikmayanlar: OnNumaraResponse = [];
  tipUzunZamandirCikmayanlar: ZamanTip = ZamanTip.UZUN_ZAMANDIR_CIKMAYANLAR;

  constructor(
    private onNumaraService: OnNumaraService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | On Numara Uzun Zamandır Çıkmayanlar');
  }

  ngOnInit(): void {
    this.getUzunZamandir();
    this.spinner.show();
  }
  getUzunZamandir() {
    this.onNumaraService
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
