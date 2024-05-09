import { Component, OnInit } from '@angular/core';
import { SuperLotoResponse } from 'src/app/models/super-loto.model';
import { TekrarTip } from 'src/app/constants/Tekrar-tip';
import { SuperLotoService } from 'src/app/super-loto.service';

@Component({
  selector: 'app-super-loto-cok-cikan',
  templateUrl: './super-loto-cok-cikan.component.html',
  styleUrls: ['./super-loto-cok-cikan.component.scss'],
})
export class SuperLotoCokCikanComponent implements OnInit {
  cokCikanlar: SuperLotoResponse = [];
  tipCokCikanlar: TekrarTip = TekrarTip.COK_CIKAN;
  altCokCikanlar: SuperLotoResponse = [];
  constructor(private readonly superLotoService: SuperLotoService) {}

  ngOnInit(): void {
    this.getCokCikanlar();
  }

  getCokCikanlar() {
    this.superLotoService
      .tekraraGoreGet(this.tipCokCikanlar)
      .subscribe((data) => {
        this.cokCikanlar = data.slice(0, 5);
        this.altCokCikanlar = data.slice(5);
      });
  }
}
