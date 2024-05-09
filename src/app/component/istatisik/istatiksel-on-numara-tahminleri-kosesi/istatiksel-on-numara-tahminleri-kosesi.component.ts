import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { TahminTip } from 'src/app/constants/tahmin-tip';
import { OnNumaraService } from 'src/app/on-numara.service';
import { SayisalLotoService } from 'src/app/sayisal-loto.service';

@Component({
  selector: 'app-istatistiksel-on-numara-tahminleri-kosesi',
  templateUrl: './istatiksel-on-numara-tahminleri-kosesi.component.html',
  styleUrls: ['./istatiksel-on-numara-tahminleri-kosesi.component.scss'],
})
export class IstatistikselOnNumaraTahminleriKosesiComponent implements OnInit {
  toplar: string[] = [];
  tahminTip = TahminTip;
  selectedTahminTip: TahminTip = TahminTip.COK_CIKAN;

  constructor(
    private readonly tahminService: OnNumaraService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | On Numara Tahmin ');
  }
  ngOnInit(): void {
    this.getTahmin();
  }

  getTahmin() {
    this.tahminService.tahminGet(this.selectedTahminTip).subscribe((data) => {
      this.toplar = data.split(',');
      this.spinner.hide();
    });
  }
}
