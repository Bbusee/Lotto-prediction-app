import { Component, OnInit } from '@angular/core';
import { TahminTip } from 'src/app/constants/tahmin-tip';
import { SayisalLotoService } from 'src/app/sayisal-loto.service';
import { SuperLotoService } from 'src/app/super-loto.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-istatistiksel-super-loto-tahminleri-kosesi',
  templateUrl: './istatiksel-super-loto-tahminleri-kosesi.component.html',
  styleUrls: ['./istatiksel-super-loto-tahminleri-kosesi.component.scss'],
})
export class IstatistikselSuperLotoTahminleriKosesiComponent implements OnInit {
  toplar: string[] = [];
  tahminTip = TahminTip;
  selectedTahminTip: TahminTip = TahminTip.COK_CIKAN;

  constructor(
    private readonly superLotoTahminService: SuperLotoService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | Süper Loto Tahmin');
  }
  ngOnInit(): void {
    this.getTahmin();
  }

  getTahmin() {
    this.superLotoTahminService
      .tahminGet(this.selectedTahminTip)
      .subscribe((data) => {
        this.toplar = data.split(',');
        this.spinner.hide();
      });
  }
}
