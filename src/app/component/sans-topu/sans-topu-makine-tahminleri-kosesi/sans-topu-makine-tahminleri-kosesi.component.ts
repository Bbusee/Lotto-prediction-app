import { Component, OnInit } from '@angular/core';

import { TahminTip } from 'src/app/constants/tahmin-tip';
import { SansTopuService } from 'src/app/sans-topu.service';
@Component({
  selector: 'app-sans-topu-makine-tahminleri-kosesi',
  templateUrl: './sans-topu-makine-tahminleri-kosesi.component.html',
  styleUrls: ['./sans-topu-makine-tahminleri-kosesi.component.scss'],
})
export class SansTopuMakineTahminleriKosesiComponent implements OnInit {
  makineTahmin: string[] = [];
  constructor(private readonly sansTopuTahminService: SansTopuService) {}
  ngOnInit(): void {
    this.getMakineTahmin();
  }

  getMakineTahmin() {
    this.sansTopuTahminService
      .tahminGet(TahminTip.RASTGELE)
      .subscribe((data: string) => {
        this.makineTahmin = data.split(',');
        this.makineTahmin.splice(5, 0);
      });
  }
}
