import { SayisalLotoService } from 'src/app/sayisal-loto.service';
import { Component, OnInit } from '@angular/core';
import { ZamanTip } from 'src/app/constants/Zaman-tip';
import { SayisalLotoResponse } from 'src/app/models/sayisal-loto-model';

@Component({
  selector: 'app-sayisal-loto-yakin-zamanda-cikanlar',
  templateUrl: './sayisal-loto-yakin-zamanda-cikanlar.component.html',
  styleUrls: ['./sayisal-loto-yakin-zamanda-cikanlar.component.scss'],
})
export class SayisalLotoYakinZamandaCikanlarComponent implements OnInit {
  yakinZamandaCikanlar: SayisalLotoResponse = [];
  tipYakinZamandaCikanlar: ZamanTip = ZamanTip.YAKIN_ZAMANDA_CIKANLAR;
  altYakinZamandaCikanlar: SayisalLotoResponse = [];
  constructor(private readonly sayisalLotoService: SayisalLotoService) {}

  ngOnInit(): void {
    this.getYakinZamandaCikanlar();
  }

  getYakinZamandaCikanlar() {
    this.sayisalLotoService
      .zamanaGoreGet(this.tipYakinZamandaCikanlar)
      .subscribe((data) => {
        this.yakinZamandaCikanlar = data.slice(0, 5);
        this.altYakinZamandaCikanlar = data.slice(5);
      });
  }
}
