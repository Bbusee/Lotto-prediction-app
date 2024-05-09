import { SayisalLotoResponse } from 'src/app/models/sayisal-loto-model';
import { SayisalLotoService } from 'src/app/sayisal-loto.service';
import { Component, OnInit } from '@angular/core';
import { ZamanTip } from 'src/app/constants/Zaman-tip';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sayisal-loto-uzun-zamandir-cikmayanlar',
  templateUrl: './sayisal-loto-uzun-zamandir-cikmayanlar.component.html',
  styleUrls: ['./sayisal-loto-uzun-zamandir-cikmayanlar.component.scss'],
})
export class SayisalLotoUzunZamandirCikmayanlarComponent implements OnInit {
  uzunZamandirCikmayanlar: SayisalLotoResponse = [];
  tipUzunZamandirCikmayanlar: ZamanTip = ZamanTip.UZUN_ZAMANDIR_CIKMAYANLAR;
  altUzunZamandirCikmayanlar: SayisalLotoResponse = [];

  constructor(
    private sayisalLotoService: SayisalLotoService,
    private readonly spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getUzunZamandir();
  }
  getUzunZamandir() {
    this.sayisalLotoService
      .zamanaGoreGet(this.tipUzunZamandirCikmayanlar)
      .subscribe((data) => {
        this.uzunZamandirCikmayanlar = data.slice(0, 5);
        this.altUzunZamandirCikmayanlar = data.slice(5);
        this.spinner.hide();
      });
  }
}
