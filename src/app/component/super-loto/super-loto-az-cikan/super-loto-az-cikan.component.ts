import { Component, OnInit } from '@angular/core';
import { SuperLotoService } from 'src/app/super-loto.service';
import { TekrarTip } from 'src/app/constants/Tekrar-tip';
import { SuperLotoResponse } from 'src/app/models/super-loto.model';
@Component({
  selector: 'app-super-loto-az-cikan',
  templateUrl: './super-loto-az-cikan.component.html',
  styleUrls: ['./super-loto-az-cikan.component.scss'],
})
export class SuperLotoAzCikanComponent implements OnInit {
  azCikanlar: SuperLotoResponse = [];
  tipAzCikanlar: TekrarTip = TekrarTip.AZ_CIKAN;
  altAzCikanlar: SuperLotoResponse = [];
  constructor(private readonly superLotoService: SuperLotoService) {}

  ngOnInit(): void {
    this.getAzCikanlar();
  }

  getAzCikanlar() {
    this.superLotoService
      .tekraraGoreGet(this.tipAzCikanlar)
      .subscribe((data) => {
        this.azCikanlar = data.slice(0, 5);
        this.altAzCikanlar = data.slice(5);
      });
  }
}
