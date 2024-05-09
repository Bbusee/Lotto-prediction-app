import { Component, OnInit } from '@angular/core';
import { TekrarTip } from 'src/app/constants/Tekrar-tip';
import { SansTopuResponse } from 'src/app/models/sans-topu.model';
import { SansTopuService } from 'src/app/sans-topu.service';

@Component({
  selector: 'app-sans-topu-az-cikan',
  templateUrl: './sans-topu-az-cikan.component.html',
  styleUrls: ['./sans-topu-az-cikan.component.scss'],
})
export class SansTopuAzCikanComponent implements OnInit {
  azCikanlar: SansTopuResponse = [];
  tipAzCikanlar: TekrarTip = TekrarTip.AZ_CIKAN;
  altAzCikanlar: SansTopuResponse = [];

  constructor(private readonly sansTopuService: SansTopuService) {}

  ngOnInit(): void {
    this.getAzCikanlar();
  }

  getAzCikanlar() {
    this.sansTopuService
      .tekraraGoreGet(this.tipAzCikanlar)
      .subscribe((data) => {
        this.azCikanlar = data.slice(0, 5);
        this.altAzCikanlar = data.slice(5);
      });
  }
}
