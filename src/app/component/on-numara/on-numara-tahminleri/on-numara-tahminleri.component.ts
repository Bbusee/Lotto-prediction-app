import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-on-numara-tahminleri',
  templateUrl: './on-numara-tahminleri.component.html',
  styleUrls: ['./on-numara-tahminleri.component.scss'],
})
export class OnNumaraTahminleriComponent implements OnInit {
  constructor(private readonly spinner: NgxSpinnerService,
              private title: Title) {
    title.setTitle('Loto Tahmin | On Numara Tahminler')
  }
  ngOnInit(): void {
    this.spinner.show();
  }
}
