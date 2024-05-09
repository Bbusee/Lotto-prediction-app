import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-sayisal-loto-tum-sonuclar',
  templateUrl: './sayisal-loto-tum-sonuclar.component.html',
  styleUrls: ['./sayisal-loto-tum-sonuclar.component.scss'],
})
export class SayisalLotoTumSonuclarComponent implements OnInit {
  constructor(private readonly spinner: NgxSpinnerService,
              private title: Title) {
    title.setTitle('Loto Tahmin | Sayısal Loto Sonuçlar')
  }

  ngOnInit(): void {
    this.spinner.show();
  }
}
