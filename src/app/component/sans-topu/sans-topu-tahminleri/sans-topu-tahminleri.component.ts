import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-sans-topu-tahminleri',
  templateUrl: './sans-topu-tahminleri.component.html',
  styleUrls: ['./sans-topu-tahminleri.component.scss'],
})
export class SansTopuTahminleriComponent implements OnInit {
  constructor(private readonly spinner: NgxSpinnerService,
              private title: Title) {
    title.setTitle('Loto Tahmin | Şans Topu Tahminler')
  }
  ngOnInit(): void {
    this.spinner.show();
  }
}
