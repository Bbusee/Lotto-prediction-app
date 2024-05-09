import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-sans-topu-tum-sonuclar',
  templateUrl: './sans-topu-tum-sonuclar.component.html',
  styleUrls: ['./sans-topu-tum-sonuclar.component.scss'],
})
export class SansTopuTumSonuclarComponent implements OnInit {
  constructor(private readonly spinner: NgxSpinnerService,
              private title: Title) {
    title.setTitle('Loto Tahmin | Şans Topu Sonuçlar')
  }
  ngOnInit(): void {
    this.spinner.show();
  }
}
