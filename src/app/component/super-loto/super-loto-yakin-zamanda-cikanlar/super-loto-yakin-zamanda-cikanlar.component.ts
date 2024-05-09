import { Component, OnInit } from '@angular/core';
import { ZamanTip } from 'src/app/constants/Zaman-tip';
import { SuperLotoService } from 'src/app/super-loto.service';
import { SuperLotoResponse } from 'src/app/models/super-loto.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-super-loto-yakin-zamanda-cikanlar',
  templateUrl: './super-loto-yakin-zamanda-cikanlar.component.html',
  styleUrls: ['./super-loto-yakin-zamanda-cikanlar.component.scss'],
})
export class SuperLotoYakinZamandaCikanlarComponent implements OnInit {
  yakinZamandaCikanlar: SuperLotoResponse = [];
  tipYakinZamandaCikanlar: ZamanTip = ZamanTip.YAKIN_ZAMANDA_CIKANLAR;
  altYakinZamandaCikanlar: SuperLotoResponse = [];
  constructor(
    private readonly superLotoService: SuperLotoService,
    private readonly spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getYakinZamandaCikanlar();
  }

  getYakinZamandaCikanlar() {
    this.superLotoService
      .zamanaGoreGet(this.tipYakinZamandaCikanlar)
      .subscribe((data) => {
        this.yakinZamandaCikanlar = data.slice(0, 5);
        this.altYakinZamandaCikanlar = data.slice(5);
        this.spinner.hide();
      });
  }
}
