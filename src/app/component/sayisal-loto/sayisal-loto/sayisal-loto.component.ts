import { Component, OnInit } from '@angular/core';
import { SonCikanResponse } from 'src/app/models/son-cikan.model';
import { SonCikanService } from 'src/app/son-cikan.service';

@Component({
  selector: 'app-sayisal-loto',
  templateUrl: './sayisal-loto.component.html',
  styleUrls: ['./sayisal-loto.component.scss'],
})
export class SayisalLotoComponent implements OnInit {
  sayisalLotoSonCikan: SonCikanResponse = new SonCikanResponse();
  toplar: string[] = [];

  constructor(private readonly sonCikanService: SonCikanService) {}

  ngOnInit() {
    this.getSayisalLotoSonCikan();
  }
  getSayisalLotoSonCikan() {
    this.sonCikanService.sayisalLotoSonCikan().subscribe((data) => {
      this.sayisalLotoSonCikan = data;
      this.toplar = data.toplarStr.split(',');
      console.log(this.sayisalLotoSonCikan);
    });
  }
}
