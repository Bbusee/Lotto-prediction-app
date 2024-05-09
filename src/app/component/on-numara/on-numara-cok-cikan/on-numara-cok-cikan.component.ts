import { Component, OnInit } from '@angular/core';
import { TekrarTip } from 'src/app/constants/Tekrar-tip';
import { OnNumaraResponse } from 'src/app/models/on-numara.model';
import { OnNumaraService } from 'src/app/on-numara.service';

@Component({
  selector: 'app-on-numara-cok-cikan',
  templateUrl: './on-numara-cok-cikan.component.html',
  styleUrls: ['./on-numara-cok-cikan.component.scss'],
})
export class OnNumaraCokCikanComponent implements OnInit {
  cokCikanlar: OnNumaraResponse = [];
  tipCokCikanlar: TekrarTip = TekrarTip.COK_CIKAN;
  altCokCikanlar: OnNumaraResponse = [];
  constructor(private readonly onNumaraService: OnNumaraService) {}

  ngOnInit(): void {
    this.getCokCikanlar();
  }

  getCokCikanlar() {
    this.onNumaraService
      .tekraraGoreGet(this.tipCokCikanlar)
      .subscribe((data) => {
        this.cokCikanlar = data.slice(0, 5);
        this.altCokCikanlar = data.slice(5);
      });
  }
}
