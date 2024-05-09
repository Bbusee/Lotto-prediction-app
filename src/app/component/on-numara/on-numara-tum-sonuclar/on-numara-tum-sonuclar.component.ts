import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-on-numara-tum-sonuclar',
  templateUrl: './on-numara-tum-sonuclar.component.html',
  styleUrls: ['./on-numara-tum-sonuclar.component.scss'],
})
export class OnNumaraTumSonuclarComponent implements OnInit {
  constructor(private readonly spinner: NgxSpinnerService,
              private title: Title) {
    title.setTitle('Loto Tahmin | On Numara Sonuçlar')
  }
  ngOnInit(): void {
    this.spinner.show();
  }
}
