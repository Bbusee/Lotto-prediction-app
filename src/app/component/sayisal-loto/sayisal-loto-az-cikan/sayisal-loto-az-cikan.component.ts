import { Component, OnInit } from '@angular/core';
import { TekrarTip } from 'src/app/constants/Tekrar-tip';
import { SayisalLotoResponse } from 'src/app/models/sayisal-loto-model';
import { SayisalLotoService } from 'src/app/sayisal-loto.service';

@Component({
  selector: 'app-sayisal-loto-az-cikan',
  templateUrl: './sayisal-loto-az-cikan.component.html',
  styleUrls: ['./sayisal-loto-az-cikan.component.scss'],
})
export class SayisalLotoAzCikanComponent implements OnInit {
  azCikanlar: SayisalLotoResponse = [];
  tipAzCikanlar: TekrarTip = TekrarTip.AZ_CIKAN;
  altAzCikanlar: SayisalLotoResponse = [];

  constructor(private readonly sayisalLotoService: SayisalLotoService) {}

  ngOnInit(): void {
    this.getAzCikanlar();
  }

  getAzCikanlar() {
    this.sayisalLotoService
      .tekraraGoreGet(this.tipAzCikanlar)
      .subscribe((data) => {
        this.azCikanlar = data.slice(0, 5);
        this.altAzCikanlar = data.slice(5);
      });
  }


}
