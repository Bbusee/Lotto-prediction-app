import { Component, OnInit } from '@angular/core';
import { ZamanTip } from 'src/app/constants/Zaman-tip';
import { SansTopuResponse } from 'src/app/models/sans-topu.model';
import { SansTopuService } from 'src/app/sans-topu.service';

@Component({
  selector: 'app-sans-topu-uzun-zamandir-cikmayanlar',
  templateUrl: 'sans-topu-uzun-zamandir-cikamayanlar.component.html',
  styleUrls: ['sans-topu-uzun-zamandir-cikamayanlar.component.scss'],
})
export class SansTopuUzunZamandirCikmayanlarComponent implements OnInit {
  uzunZamandirCikmayanlar: SansTopuResponse = [];
  tipUzunZamandirCikmayanlar: ZamanTip = ZamanTip.UZUN_ZAMANDIR_CIKMAYANLAR;
  altUzunZamandirCikmayanlar: SansTopuResponse = [];

  constructor(private sansTopuService: SansTopuService) {}

  ngOnInit(): void {
    this.getUzunZamandir();
  }
  getUzunZamandir() {
    this.sansTopuService
      .zamanaGoreGet(this.tipUzunZamandirCikmayanlar)
      .subscribe((data) => {
        this.uzunZamandirCikmayanlar = data.slice(0, 5);
        this.altUzunZamandirCikmayanlar = data.slice(5);
      });
  }
}
