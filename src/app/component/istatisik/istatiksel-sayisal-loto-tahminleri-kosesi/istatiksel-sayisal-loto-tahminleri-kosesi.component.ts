import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { TahminTip } from 'src/app/constants/tahmin-tip';
import { SayisalLotoService } from 'src/app/sayisal-loto.service';

@Component({
  selector: 'app-istatistiksel-sayisal-loto-tahminleri-kosesi',
  templateUrl: './istatiksel-sayisal-loto-tahminleri-kosesi.component.html',
  styleUrls: ['./istatiksel-sayisal-loto-tahminleri-kosesi.component.scss'],
})
export class IstatistikselSayisalLotoTahminleriKosesiComponent
  implements OnInit
{
  toplar: string[] = [];
  tahminTip = TahminTip;
  selectedTahminTip: TahminTip = TahminTip.COK_CIKAN;

  constructor(
    private readonly tahminService: SayisalLotoService,
    private readonly spinner: NgxSpinnerService,
    private title: Title
  ) {
    title.setTitle('Loto Tahmin | Sayısal Loto Tahmin');
  }
  ngOnInit(): void {
    this.getTahmin();
  }

  getTahmin() {
    this.tahminService.tahminGet(this.selectedTahminTip).subscribe((data) => {
      this.toplar = data.split(',');
      this.generateSuperStar();
      // this.generateJoker();
      this.spinner.hide();
    });
  }
  SuperStar: number = 0;
  generateSuperStar() {
    this.SuperStar = Math.random();
    this.SuperStar *= 90 - 1 + 1;
    // Shift the scaled number to start from the minimum value
    this.SuperStar = Math.floor(this.SuperStar) + 1;
  }
  // joker: number = 0;
  // generateJoker() {
  //   let isUnique = false;
  //   while (!isUnique) {
  //     this.joker = Math.random();
  //     this.joker *= 90 - 1 + 1;
  //     this.joker = Math.floor(this.joker) + 1;
  //     if (!this.toplar.includes(String(this.joker))) {
  //       isUnique = true;
  //     }
  //   }
  // }
}
