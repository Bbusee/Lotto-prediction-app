import { Component, OnInit } from '@angular/core';
import { TekrarTip } from 'src/app/constants/Tekrar-tip';
import { SansTopuResponse } from 'src/app/models/sans-topu.model';
import { SansTopuService } from 'src/app/sans-topu.service';

@Component({
  selector: 'app-sans-topu-cok-cikan',
  templateUrl: './sans-topu-cok-cikan.component.html',
  styleUrls: ['./sans-topu-cok-cikan.component.scss'],
})
export class SansTopuCokCikanComponent implements OnInit {
  cokCikanlar: SansTopuResponse = [];
  tipCokCikanlar: TekrarTip = TekrarTip.COK_CIKAN;
  altCokCikanlar: SansTopuResponse = [];

  constructor(private readonly sansTopuService: SansTopuService) {}

  ngOnInit(): void {
    this.getAzCikanlar();
  }

  getAzCikanlar() {
    this.sansTopuService
      .tekraraGoreGet(this.tipCokCikanlar)
      .subscribe((data) => {
        this.cokCikanlar = data.slice(0, 5);
        this.altCokCikanlar = data.slice(5);
      });
  }
}
