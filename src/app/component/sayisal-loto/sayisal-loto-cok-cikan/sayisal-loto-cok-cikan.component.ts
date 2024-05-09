import { TekrarTip } from 'src/app/constants/Tekrar-tip';
import { SayisalLotoService } from 'src/app/sayisal-loto.service';
import { Component, OnInit } from '@angular/core';
import { SayisalLotoResponse } from 'src/app/models/sayisal-loto-model';

@Component({
  selector: 'app-sayisal-loto-cok-cikan',
  templateUrl: './sayisal-loto-cok-cikan.component.html',
  styleUrls: ['./sayisal-loto-cok-cikan.component.scss'],
})
export class SayisalLotoCokCikanComponent implements OnInit {
  cokCikanlar: SayisalLotoResponse = [];
  tipCokCikanlar: TekrarTip = TekrarTip.COK_CIKAN;
  altCokCikanlar: SayisalLotoResponse = [];

  constructor(private readonly sayisalLotoService: SayisalLotoService) {}

  ngOnInit(): void {
    this.getCokCikan();
  }

  getCokCikan() {
    this.sayisalLotoService
      .tekraraGoreGet(this.tipCokCikanlar)
      .subscribe((data) => {
        this.cokCikanlar = data.slice(0, 5);
        this.altCokCikanlar = data.slice(5);
      });
  }
}
