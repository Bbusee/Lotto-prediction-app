import { Component, OnInit } from '@angular/core';
import { SonCikanResponse } from 'src/app/models/son-cikan.model';
import { SonCikanService } from 'src/app/son-cikan.service';
@Component({
  selector: 'app-sans-topu',
  templateUrl: './sans-topu.component.html',
  styleUrls: ['./sans-topu.component.scss'],
})
export class SansTopuComponent implements OnInit {
  sansTopuSonCikan: SonCikanResponse = new SonCikanResponse();
  toplar: string[] = [];

  constructor(private readonly sonCikanService: SonCikanService) {}
  ngOnInit() {
    this.getSansTopuSonCikan();
  }
  getSansTopuSonCikan() {
    this.sonCikanService.sansTopuSonCikan().subscribe((data) => {
      this.sansTopuSonCikan = data;
      this.toplar = data.toplarStr.split(',');
      console.log(this.sansTopuSonCikan);
    });
  }
}
