import { Component, OnInit } from '@angular/core';
import { TahminTip } from 'src/app/constants/tahmin-tip';
import { SayisalLotoService } from 'src/app/sayisal-loto.service';

@Component({
  selector: 'app-sayisal-loto-makine-tahminleri-kosesi',
  templateUrl: './sayisal-loto-makine-tahminleri-kosesi.component.html',
  styleUrls: ['./sayisal-loto-makine-tahminleri-kosesi.component.scss'],
})
export class SayisalLotoMakineTahminleriKosesiComponent implements OnInit {
  makineTahmin: string[] = [];
  toplar: string[] = [];

  constructor(private readonly tahminService: SayisalLotoService) {}
  ngOnInit(): void {
    this.getMakineTahmin();
  }

  getMakineTahmin() {
    this.tahminService
      .tahminGet(TahminTip.RASTGELE)
      .subscribe((data: string) => {
        this.toplar = data.split(',');
        this.generateSuperStar();
        // this.generateJoker();
      });
  }
  SuperStar: number = 0;
  generateSuperStar() {
    this.SuperStar = Math.random();
    this.SuperStar *= 90 - 1 + 1;
    // Shift the scaled number to start from the minimum value
    this.SuperStar = Math.floor(this.SuperStar) + 1;
  }
  // joker: number = 0;
  // generateJoker() {
  //   let isUnique = false;
  //   while (!isUnique) {
  //     this.joker = Math.random();
  //     this.joker *= 90 - 1 + 1;
  //     this.joker = Math.floor(this.joker) + 1;
  //     if (!this.toplar.includes(String(this.joker))) {
  //       isUnique = true;
  //     }
  //   }
  // }
}
