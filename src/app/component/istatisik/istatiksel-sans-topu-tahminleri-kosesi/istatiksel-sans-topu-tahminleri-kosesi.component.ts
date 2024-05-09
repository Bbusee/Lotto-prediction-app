import { Component, OnInit } from '@angular/core';
import { TahminTip } from 'src/app/constants/tahmin-tip';
import { SayisalLotoService } from 'src/app/sayisal-loto.service';
import { SansTopuService } from 'src/app/sans-topu.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-istatistiksel-sans-topu-tahminleri-kosesi',
  templateUrl: './istatiksel-sans-topu-tahminleri-kosesi.component.html',
  styleUrls: ['./istatiksel-sans-topu-tahminleri-kosesi.component.scss'],
})
export class IstatistikselSansTopuTahminleriKosesiComponent implements OnInit {
  toplar: string[] = [];
  tahminTip = TahminTip;
  selectedTahminTip: TahminTip = TahminTip.COK_CIKAN;

  constructor(
    private readonly sansTopuTahminService: SansTopuService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | Şans Topu Tahminler');
  }
  ngOnInit(): void {
    this.getTahmin();
  }

  getTahmin() {
    this.sansTopuTahminService
      .tahminGet(this.selectedTahminTip)
      .subscribe((data) => {
        this.toplar = data.split(',');
        this.toplar.splice(5, 0);
        this.spinner.hide();
      });
  }
}
