import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SayisalLotoResponse, TopFrekans } from './models/sayisal-loto-model';
import { TekrarTip } from './constants/Tekrar-tip';
import { ZamanTip } from './constants/Zaman-tip';
import { TahminTip } from './constants/tahmin-tip';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SayisalLotoService {
  constructor(private readonly http: HttpClient) {}

  tekraraGoreGet(
    tip: TekrarTip = TekrarTip.AZ_CIKAN
  ): Observable<SayisalLotoResponse> {
    const url: string = `/SayisalLoto/TekraraGoreGet`;
    return this.http.get<SayisalLotoResponse>(url, {
      params: { tip },
    });
  }
  zamanaGoreGet(
    tip: ZamanTip = ZamanTip.YAKIN_ZAMANDA_CIKANLAR
  ): Observable<SayisalLotoResponse> {
    const url: string = `/SayisalLoto/ZamanaGoreGet`;
    return this.http.get<SayisalLotoResponse>(url, {
      params: { tip },
    });
  }

  tahminGet(tip: TahminTip = TahminTip.COK_CIKAN): Observable<string> {
    const url: string = `/SayisalLoto/GetTahmin`;
    return this.http.get(url, { responseType: 'text', params: { tip } });
  }
}
