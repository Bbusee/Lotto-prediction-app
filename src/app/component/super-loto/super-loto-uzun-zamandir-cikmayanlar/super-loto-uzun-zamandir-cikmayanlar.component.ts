import { Component, OnInit } from '@angular/core';
import { ZamanTip } from 'src/app/constants/Zaman-tip';
import { SuperLotoResponse } from 'src/app/models/super-loto.model';
import { SuperLotoService } from 'src/app/super-loto.service';

@Component({
  selector: 'app-super-loto-uzun-zamandir-cikmayanlar',
  templateUrl: './super-loto-uzun-zamandir-cikmayanlar.component.html',
  styleUrls: ['./super-loto-uzun-zamandir-cikmayanlar.component.scss'],
})
export class SuperLotoUzunZamandirCikmayanlarComponent implements OnInit {
  uzunZamandirCikmayanlar: SuperLotoResponse = [];
  tipUzunZamandirCikmayanlar: ZamanTip = ZamanTip.UZUN_ZAMANDIR_CIKMAYANLAR;
  altUzunZamandirCikmayanlar: SuperLotoResponse = [];

  constructor(private superLotoService: SuperLotoService) {}

  ngOnInit(): void {
    this.getUzunZamandir();
  }
  getUzunZamandir() {
    this.superLotoService
      .zamanaGoreGet(this.tipUzunZamandirCikmayanlar)
      .subscribe((data) => {
        this.uzunZamandirCikmayanlar = data.slice(0, 5);
        this.altUzunZamandirCikmayanlar = data.slice(5);
      });
  }
}
