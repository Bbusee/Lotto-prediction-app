import { Component, OnInit } from '@angular/core';
import { ZamanTip } from 'src/app/constants/Zaman-tip';
import { OnNumaraResponse } from 'src/app/models/on-numara.model';
import { OnNumaraService } from 'src/app/on-numara.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-on-numara-yakin-zamanda-cikanlar-sayfasi',
  templateUrl: './on-numara-yakin-zamanda-cikanlar-sayfasi.component.html',
  styleUrls: ['./on-numara-yakin-zamanda-cikanlar-sayfasi.component.scss'],
})
export class OnNumaraYakinZamandaCikanlarSayfasiComponent implements OnInit {
  yakinZamandaCikanlar: OnNumaraResponse = [];
  tipYakinZamandaCikanlar: ZamanTip = ZamanTip.YAKIN_ZAMANDA_CIKANLAR;
  constructor(
    private readonly onNumaraService: OnNumaraService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | On Numara Yakın Zamanda Çıkanlar');
  }

  ngOnInit(): void {
    this.getYakinZamandaCikanlar();
    this.spinner.show();
  }

  getYakinZamandaCikanlar() {
    this.onNumaraService
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
