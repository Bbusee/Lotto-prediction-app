import { Component, OnInit } from '@angular/core';
import { TahminTip } from 'src/app/constants/tahmin-tip';
import { OnNumaraService } from 'src/app/on-numara.service';

@Component({
  selector: 'app-on-numara-makine-tahminleri',
  templateUrl: './on-numara-makine-tahminleri.component.html',
  styleUrls: ['./on-numara-makine-tahminleri.component.scss'],
})
export class OnNumaraMakineTahminleriComponent implements OnInit {
  makineTahmin: string[] = [];
  constructor(private readonly tahminService: OnNumaraService) {}
  ngOnInit(): void {
    this.getMakineTahmin();
  }
  getMakineTahmin() {
    this.tahminService
      .tahminGet(TahminTip.RASTGELE)
      .subscribe((data: string) => {
        this.makineTahmin = data.split(',');
      });
  }
}
