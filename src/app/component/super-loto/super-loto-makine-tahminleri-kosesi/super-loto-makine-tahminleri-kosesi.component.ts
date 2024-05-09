import { Component, OnInit } from '@angular/core';
import { SayisalLotoService } from 'src/app/sayisal-loto.service';
import { TahminTip } from 'src/app/constants/tahmin-tip';
import { SuperLotoService } from 'src/app/super-loto.service';

@Component({
  selector: 'app-super-loto-makine-tahminleri-kosesi',
  templateUrl: './super-loto-makine-tahminleri-kosesi.component.html',
  styleUrls: ['./super-loto-makine-tahminleri-kosesi.component.scss'],
})
export class SuperLotoMakineTahminleriKosesiComponent implements OnInit {
  makineTahmin: string[] = [];
  constructor(private readonly superLotoTahminService: SuperLotoService) {}
  ngOnInit(): void {
    this.getMakineTahmin();
  }

  getMakineTahmin() {
    this.superLotoTahminService
      .tahminGet(TahminTip.RASTGELE)
      .subscribe((data: string) => {
        this.makineTahmin = data.split(',');
      });
  }
}
