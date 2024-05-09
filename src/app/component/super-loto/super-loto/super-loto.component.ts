import { Component, OnInit } from '@angular/core';
import { SonCikanResponse } from 'src/app/models/son-cikan.model';
import { SonCikanService } from 'src/app/son-cikan.service';

@Component({
  selector: 'app-super-loto',
  templateUrl: './super-loto.component.html',
  styleUrls: ['./super-loto.component.scss'],
})
export class SuperLotoComponent implements OnInit {
  superLotoSonCikan: SonCikanResponse = new SonCikanResponse();
  toplar: string[] = [];
  constructor(private readonly sonCikanService: SonCikanService) {}

  ngOnInit() {
    this.getSuperLotoSonCikan();
  }
  getSuperLotoSonCikan() {
    this.sonCikanService.superLotoSonCikan().subscribe((data) => {
      this.superLotoSonCikan = data;
      this.toplar = data.toplarStr.split(',');
      console.log(this.superLotoSonCikan);
    });
  }
}
