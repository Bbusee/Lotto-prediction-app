import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-super-loto-tum-sonuclar',
  templateUrl: './super-loto-tum-sonuclar.component.html',
  styleUrls: ['./super-loto-tum-sonuclar.component.scss'],
})
export class SuperLotoTumSonuclarComponent implements OnInit {
  constructor(private readonly spinner: NgxSpinnerService,
              private title: Title) {
    title.setTitle('Loto Tahmin | Süper Loto Sonuçlar')
  }

  ngOnInit(): void {
    this.spinner.show();
  }
}
