import { Component, OnInit } from '@angular/core';
import { ZamanTip } from 'src/app/constants/Zaman-tip';
import { SansTopuResponse } from 'src/app/models/sans-topu.model';
import { SansTopuService } from 'src/app/sans-topu.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sans-topu-yakin-zamanda-cikanlar-sayfasi',
  templateUrl: './sans-topu-yakin-zamanda-cikanlar-sayfasi.component.html',
  styleUrls: ['./sans-topu-yakin-zamanda-cikanlar-sayfasi.component.scss'],
})
export class SansTopuYakinZamandaCikanlarSayfasiComponent implements OnInit {
  yakinZamandaCikanlar: SansTopuResponse = [];
  tipYakinZamandaCikanlar: ZamanTip = ZamanTip.YAKIN_ZAMANDA_CIKANLAR;
  constructor(
    private readonly sansTopuService: SansTopuService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | Şans Topu Yakın Zamanda Çıkanlar');
  }

  ngOnInit(): void {
    this.getYakinZamandaCikanlar();
    this.spinner.show();
  }

  getYakinZamandaCikanlar() {
    this.sansTopuService
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
