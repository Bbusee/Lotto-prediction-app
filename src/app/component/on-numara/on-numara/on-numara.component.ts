import { Component, OnInit } from '@angular/core';
import { SonCikanResponse } from 'src/app/models/son-cikan.model';
import { SonCikanService } from 'src/app/son-cikan.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-on-numara',
  templateUrl: './on-numara.component.html',
  styleUrls: ['./on-numara.component.scss'],
})
export class OnNumaraComponent implements OnInit {
  onNumaraSonCikan: SonCikanResponse = new SonCikanResponse();
  toplar: string[] = [];
  constructor(
    private readonly sonCikanService: SonCikanService,
    private readonly spinner: NgxSpinnerService
  ) {}
  ngOnInit() {
    this.getOnNumaraSonCikan();
  }
  getOnNumaraSonCikan() {
    this.sonCikanService.onNumaraSonCikan().subscribe((data) => {
      this.onNumaraSonCikan = data;
      this.toplar = data.toplarStr.split(',');
      this.spinner.hide();
    });
  }
}
