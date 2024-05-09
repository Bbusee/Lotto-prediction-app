import { Component, OnInit } from '@angular/core';
import { TekrarTip } from 'src/app/constants/Tekrar-tip';
import { OnNumaraResponse } from 'src/app/models/on-numara.model';
import { OnNumaraService } from 'src/app/on-numara.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-on-numara-az-cikan',
  templateUrl: './on-numara-az-cikan.component.html',
  styleUrls: ['./on-numara-az-cikan.component.scss'],
})
export class OnNumaraAzCikanComponent implements OnInit {
  azCikanlar: OnNumaraResponse = [];
  tipAzCikanlar: TekrarTip = TekrarTip.AZ_CIKAN;
  altAzCikanlar: OnNumaraResponse = [];

  constructor(private readonly onNumaraService: OnNumaraService) {}

  ngOnInit(): void {
    this.getAzCikanlar();
  }

  getAzCikanlar() {
    this.onNumaraService
      .tekraraGoreGet(this.tipAzCikanlar)
      .subscribe((data) => {
        this.azCikanlar = data.slice(0, 5);
        this.altAzCikanlar = data.slice(5);
      });
  }
}
