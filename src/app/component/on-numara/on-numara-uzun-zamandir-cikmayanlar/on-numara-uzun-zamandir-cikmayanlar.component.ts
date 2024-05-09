import { Component, OnInit } from '@angular/core';
import { ZamanTip } from 'src/app/constants/Zaman-tip';
import { OnNumaraResponse } from 'src/app/models/on-numara.model';
import { OnNumaraService } from 'src/app/on-numara.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-on-numara-uzun-zamandir-cikmayanlar',
  templateUrl: './on-numara-uzun-zamandir-cikmayanlar.component.html',
  styleUrls: ['./on-numara-uzun-zamandir-cikmayanlar.component.scss'],
})
export class OnNumaraUzunZamandirCikmayanlarComponent implements OnInit {
  uzunZamandirCikmayanlar: OnNumaraResponse = [];
  tipUzunZamandirCikmayanlar: ZamanTip = ZamanTip.UZUN_ZAMANDIR_CIKMAYANLAR;
  altUzunZamandirCikmayanlar: OnNumaraResponse = [];

  constructor(
    private onNumaraService: OnNumaraService,
    private readonly spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getUzunZamandir();
  }
  getUzunZamandir() {
    this.onNumaraService
      .zamanaGoreGet(this.tipUzunZamandirCikmayanlar)
      .subscribe((data) => {
        this.uzunZamandirCikmayanlar = data.slice(0, 5);
        this.altUzunZamandirCikmayanlar = data.slice(5);
        this.spinner.hide();
      });
  }
}
