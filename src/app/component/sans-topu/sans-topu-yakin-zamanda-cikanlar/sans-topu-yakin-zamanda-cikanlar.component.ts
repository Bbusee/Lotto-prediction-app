import { Component, OnInit } from '@angular/core';
import { ZamanTip } from 'src/app/constants/Zaman-tip';
import { SansTopuResponse } from 'src/app/models/sans-topu.model';
import { SansTopuService } from 'src/app/sans-topu.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sans-topu-yakin-zamanda-cikanlar',
  templateUrl: './sans-topu-yakin-zamanda-cikanlar.component.html',
  styleUrls: ['./sans-topu-yakin-zamanda-cikanlar.component.scss'],
})
export class SansTopuYakinZamandaCikanlarComponent implements OnInit {
  yakinZamandaCikanlar: SansTopuResponse = [];
  tipYakinZamandaCikanlar: ZamanTip = ZamanTip.YAKIN_ZAMANDA_CIKANLAR;
  altYakinZamandaCikanlar: SansTopuResponse = [];
  constructor(
    private readonly sansTopuService: SansTopuService,
    private readonly spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getYakinZamandaCikanlar();
  }

  getYakinZamandaCikanlar() {
    this.sansTopuService
      .zamanaGoreGet(this.tipYakinZamandaCikanlar)
      .subscribe((data) => {
        this.yakinZamandaCikanlar = data.slice(0, 5);
        this.altYakinZamandaCikanlar = data.slice(5);
        this.spinner.hide();
      });
  }
}
