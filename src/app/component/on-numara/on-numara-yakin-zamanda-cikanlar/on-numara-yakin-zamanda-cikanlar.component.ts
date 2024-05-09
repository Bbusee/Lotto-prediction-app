import { Component, OnInit } from '@angular/core';
import { ZamanTip } from 'src/app/constants/Zaman-tip';
import { OnNumaraResponse } from 'src/app/models/on-numara.model';
import { OnNumaraService } from 'src/app/on-numara.service';

@Component({
  selector: 'app-on-numara-yakin-zamanda-cikanlar',
  templateUrl: './on-numara-yakin-zamanda-cikanlar.component.html',
  styleUrls: ['./on-numara-yakin-zamanda-cikanlar.component.scss'],
})
export class OnNumaraYakinZamandaCikanlarComponent implements OnInit {
  yakinZamandaCikanlar: OnNumaraResponse = [];
  tipYakinZamandaCikanlar: ZamanTip = ZamanTip.YAKIN_ZAMANDA_CIKANLAR;
  altYakinZamandaCikanlar: OnNumaraResponse = [];
  constructor(private readonly onNumaraService: OnNumaraService) {}

  ngOnInit(): void {
    this.getYakinZamandaCikanlar();
  }

  getYakinZamandaCikanlar() {
    this.onNumaraService
      .zamanaGoreGet(this.tipYakinZamandaCikanlar)
      .subscribe((data) => {
        this.yakinZamandaCikanlar = data.slice(0, 5);
        this.altYakinZamandaCikanlar = data.slice(5);
      });
  }
}
