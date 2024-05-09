import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-super-loto-tahminleri',
  templateUrl: './super-loto-tahminleri.component.html',
  styleUrls: ['./super-loto-tahminleri.component.scss'],
})
export class SuperLotoTahminleriComponent implements OnInit {
  constructor(private readonly spinner: NgxSpinnerService,
              private title: Title) {
    title.setTitle('Loto Tahmin | Süper Loto Tahminler')
  }
  ngOnInit(): void {
    this.spinner.show();
  }
}
