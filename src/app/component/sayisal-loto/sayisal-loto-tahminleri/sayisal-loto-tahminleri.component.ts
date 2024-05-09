import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-sayisal-loto-tahminleri',
  templateUrl: './sayisal-loto-tahminleri.component.html',
  styleUrls: ['./sayisal-loto-tahminleri.component.scss'],
})
export class SayisalLotoTahminleriComponent implements OnInit {
  constructor(private readonly spinner: NgxSpinnerService,
              private title: Title) {
    title.setTitle('Loto Tahmin | Sayısal Loto Tahminler')
  }
  ngOnInit(): void {
    this.spinner.show();
  }
}
